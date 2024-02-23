import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://65d52e1c3f1ab8c634369dae.mockapi.io/api/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const url = `/rental?&page=1&limit=12`;
      const res = await axios.get(`${BASE_URL}${url}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const pageChange = createAsyncThunk(
  'cars/loadMore',
  async (page, thunkAPI) => {
    try {
      page = page + 1;
      const url = `/rental?&page=${page}&limit=12`;
      const { data } = await axios.get(`${BASE_URL}${url}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
