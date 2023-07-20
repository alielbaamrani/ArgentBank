import { combineReducers } from '@reduxjs/toolkit'
import { isLoggoutReducer, isLoginReducer } from './reducers/reducers'

const reducer = combineReducers({
  isLogin: isLoginReducer,
  isLoggout: isLoggoutReducer,
})


const store = createStore(reducer);
