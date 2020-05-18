import {
  GET_CURRENT_TENDER
} from '../types';

const initialState = {
  currentTender: ''
}




export default function tenderReducer(state = initialState, action) {

  switch (action.type) {

    case GET_CURRENT_TENDER:
      return {
        ...state,
        currentTender: action.payload
      };

    default: return state;
  }
}
