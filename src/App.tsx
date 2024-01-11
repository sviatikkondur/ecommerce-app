import './styles/main.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const App: React.FC = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Mont, sans-serif',
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <div style={{flex: 1, display: 'flex', alignItems: 'stretch'}}>
          <Outlet />
        </div>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default App;
