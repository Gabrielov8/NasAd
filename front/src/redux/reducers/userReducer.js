import {
  CREATE_AUCTION,
  EDIT_USER_INFO,
} from '../types';

const initialState = {
  user: {

  },
}




export default function userReducer(state = initialState, action) {

  switch (action.type) {

    case EDIT_USER_INFO:
      return state;
    case CREATE_AUCTION:
      return state;
    default: return state;
  }
}
