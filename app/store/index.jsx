import { configureStore } from '@reduxjs/toolkit'
import registerReducer from '../store/reducer/registerReducer'
import usersReducer from "../store/reducer/usersReducer"

export default configureStore({
  reducer: {
    register: registerReducer,
    users: usersReducer
  },
})