import {
  Autocomplete,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Navbar from '../features/navbar';
import SwapArrows from '../assets/icons/swap-arrows';
import PassengerSelector from '../components/passenger-selector';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Controls from '../assets/icons/controls';
import { cn } from '../utils/css-utils';
import { useEffect, useMemo, useState } from 'react';
import FlightOption from '../features/flight-option';
import { mockAirportsResponse, mockFlightsResponse } from '../mocks';
import { useLocation } from 'react-router';
import { useFormik } from 'formik';
import { flightSearchSchema } from '../validations';
import { getTextFieldFormikProps } from '../utils/formik-utils';
import { useGetFlightsQuery, useSearchAirportsQuery } from '../apis/flights';
import { useDebounce } from 'use-debounce';
import * as dfns from 'date-fns';

export default function SearchPage() {
  const [flightCategory, setFlightCategory] = useState<string>('best');
  const [lastChangedField, setLastChangedField] = useState<'origin' | 'destination'>('origin');
  const [originInput, setOriginInput] = useState<string>('');
  const [destinationInput, setDestinationInput] = useState<string>('');

  const location = useLocation();

  const formState = location?.state;

  interface AirportOption {
    label: string; // what shows in the dropdown
    skyId: string; // the flight code
    entityType: string; // CITY or AIRPORT
    entityId: string; // CITY or AIRPORT
  }

  // console.log('formState', formState);

  const formik = useFormik({
    initialValues: {
      journeyType: formState?.journeyType ?? '',
      cabinClass: formState?.cabinClass ?? '',
      origin: formState?.origin ?? {},
      destination: formState?.destination ?? {},
      date: formState?.date ?? new Date(),
      returnDate: formState?.returnDate ?? undefined,
      passengers: {
        adults: formState?.passengers?.adults ?? 1,
        children: formState?.passengers?.children ?? 0,
        infants: formState?.passengers?.infants ?? 0,
        infantsOnLap: formState?.passengers?.infantsOnLap ?? 0,
      },
    },
    validationSchema: flightSearchSchema,
    onSubmit: () => {},
  });

  const normalizedFormikValues = useMemo(() => {
    return {
      ...formik?.values,
      originSkyId: formik.values.origin?.skyId,
      destinationSkyId: formik.values.destination?.skyId,
      originEntityId: formik.values.origin?.entityId,
      destinationEntityId: formik.values.destination?.entityId,
      date: dfns.format(formik.values.date, 'yyyy-MM-dd'),
      ...(formik?.values?.returnDate && {
        returnDate: formik.values.returnDate
          ? dfns.format(formik.values.returnDate, 'yyyy-MM-dd')
          : null,
      }),
      adults: formik.values.passengers?.adults,
      children: formik.values.passengers?.children,
      infants: formik.values.passengers?.infants,
      infantsOnLap: formik.values.passengers?.infantsOnLap,
      sortBy: flightCategory,
    };
  }, [formik.values, flightCategory]);

  delete normalizedFormikValues.passengers;

  const [debouncedFormValues] = useDebounce(normalizedFormikValues, 3000);

  const {
    data: flightsData,
    isLoading: isFlightsDataLoading,
    // error: isFlightsDataError,
    refetch: refetchFlightsData,
  } = useGetFlightsQuery({
    params: {
      ...debouncedFormValues,
    },
  });

  const [debouncedInput] = useDebounce(
    lastChangedField === 'origin' ? originInput : destinationInput,
    500,
  );

  const { data: airportsData } = useSearchAirportsQuery({
    params: {
      query: debouncedInput,
    },
  });
  // @ts-expect-error we know it's an array
  const airportOptions: AirportOption[] =
    airportsData?.data?.map((item) => ({
      label: item?.presentation.suggestionTitle, // e.g. "New York (Any)" or "JFK"
      skyId: item?.navigation.relevantFlightParams.skyId,
      entityType: item?.navigation.entityType,
      entityId: item?.navigation?.entityId,
    })) ?? [];

  useEffect(() => {
    refetchFlightsData();
  }, [refetchFlightsData]);

  // console.log('flightsData', flightsData);
  // console.log('airportsData', airportsData);

  return (
    <div>
      <Navbar />

      <div className="relative h-[calc(100vh-65px)] overflow-y-auto">
        <div className="relative m-auto mt-4 pt-2 pb-8 md:h-[164px] md:w-[976px] md:pb-[160px]">
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
                  backgroundColor: '#E8F0FE',
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
            <PassengerSelector />
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
                  backgroundColor: '#E8F0FE',
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
                  // freeSolo
                  fullWidth
                  options={airportOptions}
                  value={formik.values.origin}
                  onInputChange={(_, newInput) => {
                    setOriginInput(newInput);
                    setLastChangedField('origin');
                  }}
                  onChange={(_, value) => {
                    formik.setFieldValue('origin', value);
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
                  onChange={(_, value) => {
                    formik.setFieldValue('destination', value);
                    setLastChangedField('destination');
                  }}
                  onInputChange={(_, newInput) => {
                    setDestinationInput(newInput);
                    setLastChangedField('destination');
                  }}
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
          <div className="mt-2 flex flex-wrap items-center space-y-2 space-x-2 md:space-y-0">
            <Button startIcon={<Controls />}>All filters</Button>
            <Select className="h-[30px] min-w-[90px] text-sm" value="stops">
              <MenuItem value="stops">Stops</MenuItem>
            </Select>
            <Select className="h-[30px] min-w-[90px] text-sm" value="stops">
              <MenuItem value="stops">Airlines</MenuItem>
            </Select>
            <Select className="h-[30px] min-w-[90px] text-sm" value="stops">
              <MenuItem value="stops">Bags</MenuItem>
            </Select>
            <Select className="h-[30px] min-w-[90px] text-sm" value="stops">
              <MenuItem value="stops">Price</MenuItem>
            </Select>
            <Select className="h-[30px] min-w-[90px] text-sm" value="stops">
              <MenuItem value="stops">Times</MenuItem>
            </Select>
            <Select className="h-[30px] min-w-[90px] text-sm" value="stops">
              <MenuItem value="stops">Emissions</MenuItem>
            </Select>
            <Select className="h-[30px] min-w-[90px] text-sm" value="stops">
              <MenuItem value="stops">Connecting Points</MenuItem>
            </Select>
            <Select className="h-[30px] min-w-[90px] text-sm" value="stops">
              <MenuItem value="stops">Duration</MenuItem>
            </Select>
          </div>
          <div className="mt-4 grid grid-cols-2">
            <div
              className={cn(
                'border-border rounded-l-sm border-x border-y border-r-[#1a73e8] py-3 text-center',
                flightCategory === 'best' &&
                  'border-b-4 border-[#1a73e8] bg-[#E8F0FE] text-[#1a73e8]',
              )}
              onClick={() => setFlightCategory('best')}
            >
              Best
            </div>
            <div
              className={cn(
                'border-border rounded-r-sm border-y border-r py-3 text-center',
                flightCategory === 'price_high' &&
                  'border-b-4 border-[#1a73e8] bg-[#E8F0FE] text-[#1a73e8]',
              )}
              onClick={() => setFlightCategory('price_high')}
            >
              Cheapest
            </div>
          </div>
          {isFlightsDataLoading ? (
  <div className="mt-4 flex justify-center">
    <CircularProgress />
  </div>
) : flightsData?.data?.itineraries?.length ? (
  <div className="border-border mt-4 rounded-sm border">
    {flightsData.data.itineraries.map((flight) => (
      <FlightOption
        key={flight.id}
        emissions="848 kg"
        price={flight.price?.formatted}
        legs={flight.legs}
      />
    ))}
  </div>
) : (
  <div className="mt-5 flex flex-col items-center">
    <div className="text-center">
      <Typography className="text-lg">No options matching your search.</Typography>
      <Typography className="text-grayText text-sm">
        Try changing your dates or destination to see results
      </Typography>
    </div>
    <img
      src="https://www.gstatic.com/flights/app/empty_state.svg"
      className="h-[250px] w-[200px]"
    />
  </div>
)}
        </div>
      </div>
    </div>
  );
}
