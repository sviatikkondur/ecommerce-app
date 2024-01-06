import React from 'react';
import './styles/reset.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
    <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
