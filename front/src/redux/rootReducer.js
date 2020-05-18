import { combineReducers } from 'redux';
import auctionReducer from './auctionReducer'
import firstReducer from './firstReducer';
import userReducer from './ivan/reducers/userReducer';
import appReducer from './ivan/reducers/appReducer';
import authReducer from './auth/auth-Reducer';
import tenderReducer from './ivan/reducers/tenderReducer'

export default combineReducers({
  firstReducer,
  authReducer,
  auctionReducer,
  user: userReducer,
  app: appReducer,
  tender: tenderReducer,
});



