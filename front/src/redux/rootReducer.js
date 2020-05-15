import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import userReducer from './reducers/userReducer';
import appReducer from './reducers/appReducer';


export default combineReducers({
  firstReducer,
  user: userReducer,
  app: appReducer,
})
