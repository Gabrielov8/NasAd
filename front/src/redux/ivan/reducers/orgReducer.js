import {
  CURRENT_ORG
} from '../types';

const initialState = {
  org: {

  },
}

export default function orgReducer(state = initialState, action) {

  switch (action.type) {
    case CURRENT_ORG:
      return { ...state, org: action.payload };
    default: return state;
  }
}
