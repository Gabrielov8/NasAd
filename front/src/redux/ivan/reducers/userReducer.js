import {
  CURRENT_USER,
  CREATE_AUCTION,
  EDIT_USER_INFO,
  ALL_AUCTIONS_FOR_USER
} from '../types';

const initialState = {
  user: {

  },
}

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case CURRENT_USER:
      return { ...state, user: action.payload };
    case ALL_AUCTIONS_FOR_USER:
      return { ...state, offers: action.payload }
    case EDIT_USER_INFO:
      return { ...state };
    case CREATE_AUCTION:
      return { ...state, user: action.payload };
    default: return state;
  }
}
