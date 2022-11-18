import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },

  },
})

// Action creators are generated for each case reducer function
export const { toggle } = modeSlice.actions

export default modeSlice.reducer