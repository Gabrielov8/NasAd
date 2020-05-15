import { combineReducers } from "redux";
import firstReducer from "./firstReducer";
import authReducer from './auth/auth-Reducer'
import advertiserReducer from "./advertiser/advertiserReducer";

export default combineReducers({
  firstReducer,
  authReducer,
  advertiserReducer,
 
});
