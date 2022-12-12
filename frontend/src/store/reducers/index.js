import { combineReducers } from 'redux';
import { productReducer, productDetailReducer } from './product/index.js';
import { cartReducer } from './cart/index.js';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateReducer
} from './user/index.js';

export const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userUpdate: userUpdateReducer
});
