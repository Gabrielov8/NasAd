import { CREATEAUCTION } from "./actionTypes"

const initialState = {
  auction: '222',
}

export default function(state = initialState, action){
  switch (action.type) {
    case CREATEAUCTION:
      return {
        ...state,
        auction: action.auction
      }

    default:
      return state
  }
}
