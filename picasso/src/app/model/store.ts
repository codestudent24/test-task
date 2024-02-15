import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../api/api";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(postApi.middleware),
})