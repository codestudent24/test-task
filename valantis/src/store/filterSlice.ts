import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { TypeFilterName } from "../types/filter.type"

type FilterPayload = {
  name: TypeFilterName,
  value: string | number | null,
}

interface pageState {
  isActive: boolean,
  filterName: TypeFilterName,
  filterValue: string | number | null,
}

const initialState: pageState = {
  isActive: false,
  filterName: 'product',
  filterValue: null,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<FilterPayload>) => {
      state.filterName = action.payload.name
      state.filterValue = action.payload.value
      state.isActive = true
    },
    removeFilter: (state) => {
      state.filterValue = null
      state.isActive = false
    }
  }
})

export const {
  addFilter,
  removeFilter,
} = filterSlice.actions

export default filterSlice.reducer