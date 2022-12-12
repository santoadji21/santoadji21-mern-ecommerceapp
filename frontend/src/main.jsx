import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailProduct from './components/DetailProducts/index.jsx';
import Cart from './components/Cart/index.jsx';
import Auth from './components/Auth/index.jsx';
import Register from './components/Register/index.jsx';
import Profile from './components/Profile/index.jsx';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="product/:id" element={<DetailProduct />} />
        <Route path="cart/:id" element={<Cart />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
