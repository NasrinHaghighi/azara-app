import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToggleState {
  value: boolean
}

const initialState: ToggleState = {
  value: false,
}

export const counterSlice = createSlice({
name: 'toggler',
initialState,
reducers: {
togglerAction(state, action: PayloadAction<boolean>) {
state.value = action.payload;
},
}
})

// Action creators are generated for each case reducer function
export const {togglerAction } = counterSlice.actions

export default counterSlice.reducer