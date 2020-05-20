import { CREATEAUCTION,LOADEDAUCTION, ALLAUCTION,USERINAUCTION, USERSOCIAL  } from "./actionTypes"


const initialState = {
  auction: '222',
  loaded: false,
  allauction: '',
  userinauction: [],
  usersocial: []
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
            
            case USERSOCIAL:
              return {
                ...state,
                usersocial: action.payload
              }
    
  

    default:
      return state
  }
}
