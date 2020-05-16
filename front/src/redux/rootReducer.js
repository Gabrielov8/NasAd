import { combineReducers } from 'redux'
import firstReducer from './firstReducer'
import auctionReducer from './auctionReducer'
import authReducer from './auth/auth-Reducer'

export default combineReducers({
  firstReducer,
  auctionReducer,
  authReducer
})


// export default combineReducers({
//   firstReducer,
//   authReducer
// })
