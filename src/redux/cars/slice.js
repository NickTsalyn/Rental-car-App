import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    error: null,
    isLoading: false,
  },
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.error]: handleRejected,
    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.cars = action.payload;
    },
  },
});

export const carsReducer = carsSlice.reducer;
