import { CREATEAUCTION,LOADEDAUCTION, ALLAUCTION,USERINAUCTION  } from "./actionTypes"


const initialState = {
  auction: '222',
  loaded: false,
  allauction: '',
  userinauction: []
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

          case USERINAUCTION:
            return {
              ...state,
              userinauction: action.payload
            }
    
  

    default:
      return state
  }
}
