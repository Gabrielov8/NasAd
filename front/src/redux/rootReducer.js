import { combineReducers } from "redux";
import firstReducer from "./firstReducer";
import userReducer from "./ivan/reducers/userReducer";
import appReducer from "./ivan/reducers/appReducer";
import authReducer from "./auth/auth-Reducer";
import tenderReducer from "./ivan/reducers/tenderReducer";
import advertiserReducer from "./advertiser/advertiserReducer";

export default combineReducers({
  firstReducer,
  authReducer,
  advertiserReducer,
  user: userReducer,
  app: appReducer,
  tender: tenderReducer,
});
