import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite, getFavorite } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
    error: null,
    isLoading: false,
  },
  extraReducers: {
    [getFavorite.pending]: handlePending,
    [getFavorite.error]: handleRejected,
    [getFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favorite = action.payload;
    },
    [addFavorite.pending]: handlePending,
    [addFavorite.error]: handleRejected,
    [addFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favorite.push(action.payload);
    },
    [deleteFavorite.pending]: handlePending,
    [deleteFavorite.error]: handleRejected,
    [deleteFavorite.fulfilled](state, action) {
        const index = state.favorite.findIndex(
            (favoriteCar) => favoriteCar.id === action.payload.id
          );
          state.favorite.splice(index, 1);
          state.isLoading = false;
          state.error = false;
    }
  },
});

export const favoriteReducer = favoriteSlice.reducer;
