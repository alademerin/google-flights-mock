import React, { useState } from 'react';
import {
  Popover,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  InputAdornment,
  TextField,
  Box,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronDown from '../assets/icons/chevron-down';
import Person from '../assets/icons/person';
import ChevronUp from '../assets/icons/chevron-up';

interface CounterProps {
  label: string;
  subLabel?: string;
  count: number;
  onAdd: () => void;
  onRemove: () => void;
  minCount: number;
}

const PassengerCounter: React.FC<CounterProps> = ({
  label,
  subLabel,
  count,
  onAdd,
  onRemove,
  minCount,
}) => {
  const isRemoveDisabled = count === minCount;
  const tooltipTitle = `Remove ${label.toLowerCase()}`;

  const buttonSx = {
    backgroundColor: '#E8F0FE',
    color: '#4285F4',
    borderRadius: '4px',
    width: 32,
    height: 32,
    '&:hover': {
      backgroundColor: '#D7EFFE',
    },
    '&.Mui-disabled': {
      backgroundColor: '#f5f5f5',
      color: '#bdbdbd',
    },
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" py={1} px={2}>
      <Box>
        <Typography variant="body1">{label}</Typography>
        {subLabel && (
          <Typography variant="caption" color="textSecondary">
            {subLabel}
          </Typography>
        )}
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Tooltip
          title={tooltipTitle}
          disableFocusListener
          disableTouchListener
          disableHoverListener={isRemoveDisabled}
        >
          <span>
            <IconButton onClick={onRemove} disabled={isRemoveDisabled} sx={buttonSx}>
              <RemoveIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
        <Typography variant="body1">{count}</Typography>
        <IconButton onClick={onAdd} sx={buttonSx}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export interface PassengerValues {
  adults: number;
  children: number;
  infants: number;
  infantsOnLap: number;
}

interface PassengerSelectorProps {
  value?: PassengerValues;
  onChange?: (values: PassengerValues) => void;
}

const PassengerSelector: React.FC<PassengerSelectorProps> = ({ value, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const [passengers, setPassengers] = useState<PassengerValues>(
    value || {
      adults: 1,
      children: 0,
      infants: 0,
      infantsOnLap: 0,
    },
  );

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? 'passenger-popover' : undefined;

  const totalPassengers =
    passengers.adults + passengers.children + passengers.infants + passengers.infantsOnLap;

  const updatePassenger = (key: keyof PassengerValues, value: number) => {
    setPassengers((prev) => {
      const updated = { ...prev, [key]: value };
      onChange?.(updated); // 🔥 notify parent (e.g. Formik)
      return updated;
    });
  };

  const handleDone = () => {
    onChange?.(passengers); // 🔥 final emit
    handleClose();
  };

  return (
    <>
      <TextField
        aria-describedby={id}
        variant="standard"
        value={`${totalPassengers}`}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start" sx={{ mr: -1 }}>
              <Person />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{open ? <ChevronUp /> : <ChevronDown />}</InputAdornment>
          ),
        }}
        onClick={handleClick}
        sx={{
          cursor: 'pointer',
          '& .MuiInput-underline:before': { borderBottom: 'none' },
          '& .MuiInput-underline:after': { borderBottomColor: '#4285F4' },
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
            height: '55px',
          },
          '& .MuiInputBase-input': {
            textAlign: 'center',
            padding: '0 0px !important',
            height: '48px',
          },
        }}
        className="h-10 w-[80px] md:w-[100px]"
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Paper sx={{ width: 300, py: 2 }}>
          <PassengerCounter
            label="Adults"
            count={passengers.adults}
            onAdd={() => updatePassenger('adults', passengers.adults + 1)}
            onRemove={() => updatePassenger('adults', passengers.adults - 1)}
            minCount={1}
          />
          <PassengerCounter
            label="Children"
            subLabel="Aged 2-11"
            count={passengers.children}
            onAdd={() => updatePassenger('children', passengers.children + 1)}
            onRemove={() => updatePassenger('children', passengers.children - 1)}
            minCount={0}
          />
          <PassengerCounter
            label="Infants"
            subLabel="In seat"
            count={passengers.infants}
            onAdd={() => updatePassenger('infants', passengers.infants + 1)}
            onRemove={() => updatePassenger('infants', passengers.infants - 1)}
            minCount={0}
          />
          <PassengerCounter
            label="Infants"
            subLabel="On lap"
            count={passengers.infantsOnLap}
            onAdd={() => updatePassenger('infantsOnLap', passengers.infantsOnLap + 1)}
            onRemove={() => updatePassenger('infantsOnLap', passengers.infantsOnLap - 1)}
            minCount={0}
          />
          <Box display="flex" justifyContent="flex-end" gap={1} mt={2} px={2}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDone}>Done</Button>
          </Box>
        </Paper>
      </Popover>
    </>
  );
};

export default PassengerSelector;
