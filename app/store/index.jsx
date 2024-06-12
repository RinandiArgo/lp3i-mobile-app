import { configureStore } from '@reduxjs/toolkit'
import registerReducer from '../store/reducer/registerReducer'
import usersReducer from "../store/reducer/usersReducer"
import authReducer from "./reducer/authReducer"

export default configureStore({
  reducer: {
    register: registerReducer,
    users: usersReducer,
    auth: authReducer
  },
})