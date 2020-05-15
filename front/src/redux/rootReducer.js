import { combineReducers } from 'redux'
import firstReducer from './firstReducer'
import authReducer from './auth/auth-Reducer'

export default combineReducers({
  firstReducer,
  authReducer
})
