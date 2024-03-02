import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import filterSlice from './filterSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    page: pageReducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch