import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface userState {
  firstName: string | null,
  secondName: string | null,
  isAdmin: boolean,
}

const initialState: userState = {
  firstName: null,
  secondName: null,
  isAdmin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userState>) => {
      const { firstName, secondName, isAdmin } = action.payload
      state.firstName = firstName;
      state.secondName = secondName;
      state.isAdmin = isAdmin;
    },
    logout: (state) => {
      state.firstName = null;
      state.secondName = null;
      state.isAdmin = false;
    },
  },
})

export const {
  login,
  logout,
} = userSlice.actions

export default userSlice.reducer