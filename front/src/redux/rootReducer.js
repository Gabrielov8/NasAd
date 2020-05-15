import { combineReducers } from "redux";
import firstReducer from "./firstReducer";
import advertiserReducer from "./advertiser/advertiserReducer";

export default combineReducers({
  firstReducer,
  advertiserReducer,
});
