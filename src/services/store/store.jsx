import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './mode/modeSlice'

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
})