import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brand: '',
    price: ''
  },
 reducers: {
    updateBrand(state, action) {
        state.brand = action.payload
    },
 }
});

export const {updateBrand} = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer;
