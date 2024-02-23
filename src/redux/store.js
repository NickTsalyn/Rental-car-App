import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/slice';
import { filtersReducer } from './filters/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoriteReducer } from './favorites/slice';

const favoritePersistConfig = {
  key: "root",
  storage,
};




export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer)
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);