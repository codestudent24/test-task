import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface userState {
  firstName: string | null,
  secondName: string | null,
  isAdmin: boolean,
}

const USER_STATE = 'user-state';

function getFromLocaleStorage(): userState | null {
  const stateString = localStorage.getItem(USER_STATE)
  if (stateString) return JSON.parse(stateString) as userState
  return null
}

function saveToLocalStorage(state: userState) {
  localStorage.setItem(USER_STATE, JSON.stringify(state))
}

const storageUser = getFromLocaleStorage()

const initialState: userState = {
  firstName: storageUser?.firstName || null,
  secondName: storageUser?.secondName || null,
  isAdmin: storageUser?.isAdmin || false,
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
      saveToLocalStorage(state)
    },
    logout: (state) => {
      state.firstName = null;
      state.secondName = null;
      state.isAdmin = false;
      localStorage.removeItem(USER_STATE)
    },
  },
})

export const {
  login,
  logout,
} = userSlice.actions

export default userSlice.reducer