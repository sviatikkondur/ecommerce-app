import React from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

export const RootComponent: React.FC = () => (
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="cart">
              <Route index element={<CartPage />}/>
              <Route path="checkout" element={<CheckoutPage />}/>
            </Route>
            <Route path="/products/:id" element={<ProductPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
);