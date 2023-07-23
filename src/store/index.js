import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import categoriesReducer from './categories/categoriesSlice';
import productReducer from './products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});
