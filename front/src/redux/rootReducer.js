import { combineReducers } from 'redux'
import firstReducer from './firstReducer'
import auctionReducer from './auctionReducer'

export default combineReducers({
  firstReducer,
  auctionReducer
})
