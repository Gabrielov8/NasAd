import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import userReducer from './reducers/userReducer';
import appReducer from './reducers/appReducer';
import authReducer from './auth/auth-Reducer';

export default combineReducers({
  firstReducer,
  authReducer,
  user: userReducer,
  app: appReducer,
});



