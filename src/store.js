import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './reducers/loginReducer'
import { userReducer } from './reducers/userReducer'
import { errorReducer } from './reducers/errorReducer'

export const store = configureStore({
  reducer: {
    userLogin: loginReducer,
    userProfile: userReducer,
    error: errorReducer
  },
})
