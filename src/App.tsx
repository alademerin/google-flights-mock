import {
  Autocomplete,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import './App.css';
import Navbar from './features/navbar';
import Hero from './assets/images/hero-light.svg';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import SearchIcon from './assets/icons/search';
import SwapArrows from './assets/icons/swap-arrows';
import Map from './assets/images/map.png';
import DestinationCard from './components/destination-card';
import PassengerSelector from './components/passenger-selector';
import UsefulTools from './features/useful-tools';
import FAQS from './features/faqs';
import { useFormik } from 'formik';
import { getTextFieldFormikProps } from './utils/formik-utils';
import { useNavigate } from 'react-router';
import { Routes } from './constants/routes';
import { flightSearchSchema } from './validations';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useSearchAirportsQuery, useSearchFlightsEverywhereQuery } from './apis/flights';
import { mockFlightsEverywehre } from './mocks';

function App() {
  const navigate = useNavigate();

  const [lastChangedField, setLastChangedField] = useState<'origin' | 'destination'>('origin');
  const [originInput, setOriginInput] = useState<string>('');
  const [destinationInput, setDestinationInput] = useState<string>('');
  const [debouncedInput] = useDebounce(
    lastChangedField === 'origin' ? originInput : destinationInput,
    500,
  );

  const { data: airportsData } = useSearchAirportsQuery({
    params: {
      query: debouncedInput,
    },
  });

  const formik = useFormik({
    initialValues: {
      journeyType: 'round_trip',
      cabinClass: 'economy',
      origin: {
        label: '',
        skyId: '',
        entityType: '',
        entityId: '',
      },
      destination: {
        label: '',
        skyId: '',
        entityType: '',
        entityId: '',
      },
      date: new Date(),
      returnDate: undefined,
      passengers: {
        adults: 1,
        children: 0,
        infants: 0,
        infantsOnLap: 0,
      },
    },
    validationSchema: flightSearchSchema,
    onSubmit: async (values) => {
      try {
        // console.log('values', values);
        navigate(Routes.SEARCH, { state: formik.values });
      } catch (error) {
        alert(error);
      }
    },
  });

  const { data: flightsEverywhere, isLoading: isFlightsEverywhereLoading } =
    useSearchFlightsEverywhereQuery({
      params: {
        originEntityId: formik?.values?.origin?.entityId,
        cabinClass: formik?.values?.cabinClass,
        journeyType: formik?.values?.journeyType,
      },
    });

  // console.log('APR', airportsResponse);

  interface AirportOption {
    label: string; // what shows in the dropdown

    skyId: string; // the flight code
    entityType: string; // CITY or AIRPORT
    entityId: string; // CITY or AIRPORT
  }

  // @ts-expect-error we know it's an array
  const airportOptions: AirportOption[] =
    airportsData?.data?.map((item) => ({
      label: item?.presentation.suggestionTitle, // e.g. "New York (Any)" or "JFK"
      skyId: item?.navigation.relevantFlightParams.skyId,
      entityType: item?.navigation.entityType,
      entityId: item?.navigation?.entityId,
    })) ?? [];

  // console.log('MFE', mockFlightsEverywehre);
  return (
    <>
      <Navbar />
      <div className="relative h-[calc(100vh-65px)] overflow-y-auto">
        <img src={Hero} className="" />

        <Typography className="absolute top-10 left-1/2 mt-4 -translate-x-1/2 text-2xl md:top-55 md:text-6xl">
          Flights
        </Typography>

        <div className="">
          <Paper className="md:shadow-google relative m-auto px-2 pt-2 pb-8 md:h-[164px] md:w-[976px] md:px-4 md:pb-[160px]">
            <div className="flex items-end md:space-x-2">
              <TextField
                className="h-10"
                variant="standard"
                select
                {...getTextFieldFormikProps(formik, 'journeyType')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" className="-mr-1">
                      <SwapArrows />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  // Hides the default underline on the base state
                  '& .MuiInput-underline:before': {
                    borderBottom: 'none',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#4285F4',
                  },
                  '& .MuiInputBase-root:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none',
                  },
                  '& .MuiInputBase-root.Mui-focused': {
                    backgroundColor: '#D7EFFE',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  },
                  '& .MuiInputBase-root': {
                    fontSize: '0.9rem',
                    height: '48px',
                  },
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                    padding: '0 8px',
                    lineHeight: '48px',
                  },
                }}
              >
                <MenuItem value="round_trip">Round Trip</MenuItem>
                <MenuItem value="one_way">One Way</MenuItem>
                <MenuItem value="multi_city">Multi-City</MenuItem>
              </TextField>
              <PassengerSelector
                value={{
                  adults: formik?.values?.passengers?.adults,
                  children: formik?.values?.passengers?.children,
                  infants: formik?.values?.passengers?.infants,
                  infantsOnLap: formik?.values?.passengers?.infantsOnLap,
                }}
                onChange={(val) => formik.setFieldValue('passengers', val)}
              />
              <TextField
                className="h-10"
                variant="standard"
                {...getTextFieldFormikProps(formik, 'cabinClass')}
                select
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottom: 'none',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#4285F4',
                  },
                  '& .MuiInputBase-root:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none',
                  },
                  '& .MuiInputBase-root.Mui-focused': {
                    backgroundColor: '#D7EFFE',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  },
                  '& .MuiInputBase-root': {
                    fontSize: '0.9rem',
                    height: '48px',
                  },
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                    padding: '0 8px',
                    lineHeight: '48px',
                  },
                }}
              >
                <MenuItem value="economy">Economy</MenuItem>
                <MenuItem value="premium_economy">Premium economy</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="first">First</MenuItem>
              </TextField>
            </div>
            <div className="mt-4 items-center space-x-2 md:flex">
              <div className="mb-2 flex items-center md:mb-0 md:w-1/2">
                <div className="relative flex-1">
                  <Autocomplete
                    fullWidth
                    options={airportOptions}
                    value={formik.values.origin}
                    onChange={(_, value) => formik.setFieldValue('origin', value)}
                    onInputChange={(_, newInput) => {
                      setOriginInput(newInput);
                      setLastChangedField('origin');
                    }}
                    getOptionLabel={(option) =>
                      typeof option === 'string' ? option : option?.label || ''
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Where From?"
                        error={formik?.touched?.origin && !!formik?.errors?.origin}
                      />
                    )}
                  />
                </div>

                <IconButton
                  className="border-border z-10 -mx-2 rounded-full border-x bg-white"
                  size="small"
                  sx={{ backgroundColor: 'white' }}
                  onClick={() => {
                    const { origin, destination } = formik.values;
                    formik.setValues({
                      ...formik.values,
                      origin: destination,
                      destination: origin,
                    });
                  }}
                >
                  <CompareArrowsOutlinedIcon />
                </IconButton>
                <div className="relative flex-1">
                  <Autocomplete
                    fullWidth
                    options={airportOptions}
                    value={formik.values.destination}
                    onInputChange={(_, newInput) => {
                      setDestinationInput(newInput);
                      setLastChangedField('destination');
                    }}
                    onChange={(_, value) => formik.setFieldValue('destination', value)}
                    getOptionLabel={(option) =>
                      typeof option === 'string' ? option : option?.label || ''
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Where To?"
                        error={formik?.touched?.destination && !!formik?.errors?.destination}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="border-border flex rounded-sm border md:w-1/2">
                <div className="border-border border-r">
                  <DesktopDatePicker
                    value={formik?.values?.date}
                    slotProps={{
                      textField: {
                        variant: 'outlined',
                        sx: {
                          '& fieldset': { border: 'none' },
                          border: 'none',
                        },
                      },
                    }}
                    onChange={(newValue) => formik.setFieldValue('date', newValue)}
                  />
                </div>
                <DesktopDatePicker
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      sx: {
                        '& fieldset': { border: 'none' },
                        border: 'none',
                      },
                    },
                  }}
                  value={formik.values.returnDate}
                  onChange={(newValue) => formik.setFieldValue('returnDate', newValue)}
                  // onBlur={() => formik.setFieldTouched('returnDate', true)}
                />
              </div>
            </div>
            <Button
              component="button"
              variant="contained"
              className="absolute -bottom-5 left-1/2 h-10 w-[106px] -translate-x-1/2 rounded-full"
              startIcon={<SearchIcon />}
              onClick={() => formik.handleSubmit()}
            >
              Search
            </Button>
          </Paper>
          {isFlightsEverywhereLoading ? (
            <CircularProgress />
          ) : (
            flightsEverywhere?.data?.results && (
              <div className="m-auto mt-8 px-2 pt-2 pb-8 md:h-[164px] md:w-[976px] md:px-0 md:pb-[160px]">
                <Typography className="mt-8 text-xl font-medium">
                  Find cheap flights from {formik?.values?.origin?.label} to anywhere
                </Typography>
                <div className="rounded-sm hover:bg-[#000000]">
                  <img src={Map} className="h-[150px] w-[200px]" />{' '}
                </div>
                <div className="mt-4 justify-between md:flex">
                  {flightsEverywhere?.data?.results?.slice(0, 4).map(({ content }) => (
                    <DestinationCard destination={content} />
                  ))}
                </div>
                <div>
                  <Typography className="mb-4 text-xl font-medium">
                    Useful tools to help you find the best flight deals
                  </Typography>
                  <UsefulTools />
                </div>
                <div className="mb-4">
                  <Typography className="mt-10 text-xl font-medium">
                    Frequenty Asked Questions
                  </Typography>
                  <FAQS />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
