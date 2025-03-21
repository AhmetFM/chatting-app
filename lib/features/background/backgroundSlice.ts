import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  index: number;
}

const initialState: CounterState = {
  index: 1,
}

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    changeIndex: (state, action: PayloadAction<number>) => {
      localStorage.setItem("backgroundIndex", action.payload.toString());
      state.index = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeIndex } = backgroundSlice.actions

export default backgroundSlice.reducer