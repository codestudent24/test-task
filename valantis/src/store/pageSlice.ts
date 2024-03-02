import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

interface pageState {
  ids: string[]
  page: number
  loading: boolean
}

const initialState: pageState = {
  ids: [],
  page: 1,
  loading: true
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    next: (state) => {
      state.page += 1
    },
    prev: (state) => {
      if (state.page > 1) state.page -= 1
    },
    toFirstPage: (state) => {
      state.page = 1
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  }
})

export const {
  next,
  prev,
  toFirstPage,
  setLoading
} = pageSlice.actions
export const selectPage = (state: RootState) => state.page.page
export default pageSlice.reducer