import { createSlice } from '@reduxjs/toolkit';

import PRODUCTS from '../../constants/data/products.json';

const initialState = {
  data: PRODUCTS,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// NO TIENE REDUCERS POR QUE ES ALGO QUE NO VAMOS A MODIFICAR, SOLO CONSULTAR.

export default productsSlice.reducer;
