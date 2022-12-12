import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers/index.js';
import thunk from 'redux-thunk';

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage }
};

const store = configureStore({
  preloadedState: initialState,
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
