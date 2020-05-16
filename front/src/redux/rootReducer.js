import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import userReducer from './ivan/reducers/userReducer';
import appReducer from './ivan/reducers/appReducer';
import authReducer from './auth/auth-Reducer';

export default combineReducers({
  firstReducer,
  authReducer,
  user: userReducer,
  app: appReducer,
});



