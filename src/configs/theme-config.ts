// theme.ts
import { createTheme } from '@mui/material/styles';

// Google's main brand colors
const googleColors = {
  blue: '#4285F4',
  red: '#DB4437',
  yellow: '#F4B400',
  green: '#0F9D58',
};

const theme = createTheme({
  palette: {
    primary: {
      main: googleColors.blue,
      contrastText: '#fff',
    },
    secondary: {
      main: googleColors.red,
      contrastText: '#fff',
    },
    success: {
      main: googleColors.green,
    },
    warning: {
      main: googleColors.yellow,
    },
    error: {
      main: googleColors.red,
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#202124',
      secondary: '#5f6368',
    },
  },
  typography: {
    fontFamily: ['Google Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 500 },
    h2: { fontWeight: 500 },
    h3: { fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  shape: {
    borderRadius: 8, // Google-y feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: googleColors.blue,
          '&:hover': {
            backgroundColor: '#3367D6',
          },
        },
        containedSecondary: {
          backgroundColor: googleColors.red,
          '&:hover': {
            backgroundColor: '#C1351D',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
@font-face {
  font-family: 'Google Sans';
  src: url('/fonts/GoogleSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
      `,
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            '& .MuiOutlinedInput-root': {
              borderRadius: '4px',
            },
          }),
          ...(ownerState.variant === 'filled' && {
            '& .MuiFilledInput-root': {
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
            },
          }),
        }),
      },
    },
  },
});

export default theme;
