import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://65d52e1c3f1ab8c634369dae.mockapi.io/api/cars';

export const getFavorite = createAsyncThunk(
  "favorites/getFavorite",
  async (_, thunkAPI) => {
    try {
      const url = `/favorites`;

      const res = await axios.get(`${BASE_URL}${url}`)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (car, thunkAPI) => {
    try {
      const url = `/favorites`;

      const res = await axios.post(`${BASE_URL}${url}`, car)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "favorites/deleteFavorite",
  async (carId, thunkAPI) => {
    try {
      const url = `/favorites`;

      const res = await axios.delete(`${BASE_URL}${url}/${carId}`)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);