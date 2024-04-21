import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    test: testSlice,
    user: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch