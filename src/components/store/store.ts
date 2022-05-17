import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './store-configuration'

export default configureStore({
  reducer: {
    // todo:todoSlice,
  },
})