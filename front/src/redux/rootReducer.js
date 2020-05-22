import { combineReducers } from 'redux';
import auctionReducer from './auctionReducer'
import firstReducer from './firstReducer';
import userReducer from './ivan/reducers/userReducer';
import appReducer from './ivan/reducers/appReducer';
import authReducer from './auth/auth-Reducer';
import tenderReducer from './ivan/reducers/tenderReducer'
import advertiserReducer from "./advertiser/advertiserReducer";
import mainReducer from './ivan/reducers/mainReducer';
import orgReducer from './ivan/reducers/orgReducer';

export default combineReducers({
  firstReducer,
  authReducer,
  advertiserReducer,
  auctionReducer,
  user: userReducer,
  app: appReducer,
  tender: tenderReducer,
  mainBloger: mainReducer,
  org: orgReducer,
});
