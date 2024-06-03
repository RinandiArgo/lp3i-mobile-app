import { configureStore } from '@reduxjs/toolkit'
import registerReducer from '../store/reducer/regitserReducer'

export default configureStore({
  reducer: {
    register: registerReducer
  },
})