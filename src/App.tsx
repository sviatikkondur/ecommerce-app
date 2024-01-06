import './styles/reset.scss';
import './styles/typography.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{flex: 1}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
