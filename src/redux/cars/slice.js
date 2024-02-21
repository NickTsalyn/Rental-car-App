import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) =>
  builder
    .addCase(fetchCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cars = action.payload;
    })
    .addCase(fetchCars.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchCars.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

});

export const carsReducer = carsSlice.reducer
