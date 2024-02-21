import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'https://65d52e1c3f1ab8c634369dae.mockapi.io/api/cars'


export const fetchCars = createAsyncThunk(
    'cars/fetchCars', async (_, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/rental`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)