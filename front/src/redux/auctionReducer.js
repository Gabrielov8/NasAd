import { CREATEAUCTION,LOADEDAUCTION } from "./actionTypes"


const initialState = {
  auction: '222',
  loaded: false
}

export default function(state = initialState, action){
  switch (action.type) {
    case CREATEAUCTION:
      return {
        ...state,
        auction: action.payload
      }

      case LOADEDAUCTION:
        return {
          ...state,
          loaded: action.payload
        }

    default:
      return state
  }
}
