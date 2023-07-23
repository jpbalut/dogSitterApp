import { createSlice } from '@reduxjs/toolkit';

import SERVICESCAT from '../../constants/data/servicescategories.json';

const initialState = {
  data: SERVICESCAT,
};

const servicesCatSlice = createSlice({
  name: 'servicesCat',
  initialState,
  reducers: {},
});

// NO TIENE REDUCERS POR QUE ES ALGO QUE NO VAMOS A MODIFICAR, SOLO CONSULTAR.

export default servicesCatSlice.reducer;
