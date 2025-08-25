import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GlobalStyles, StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from './configs/theme-config.ts';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ReactRouterProvider from './providers/router-provider.tsx';
import QueryClientContextProvider from './providers/query-client-context-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
          {/* <App /> */}
          <QueryClientContextProvider>
            <ReactRouterProvider />
          </QueryClientContextProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  </StrictMode>,
);
