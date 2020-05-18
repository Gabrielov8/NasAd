import { CREATEAUCTION,LOADEDAUCTION, ALLAUCTION } from "./actionTypes"


const initialState = {
  auction: '222',
  loaded: false,
  allauction: ''
}

export default function(state = initialState, action){
  switch (action.type) {
    case CREATEAUCTION:
      return {
        ...state,
        auction: action.payload
      }

      case ALLAUCTION:
        return {
          ...state,
          allauction: action.payload
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
