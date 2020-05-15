import { AUTH, LOGOUT, ERR_MESSAGE } from "./auth-actionTypes"

const initialState = {
  isAuthenticated: !!window.localStorage.getItem('isAuthenticated') || false,
  errMessage: false,
  seccess: false,
  id: ""
}

export default function (state = initialState, action) {
  switch (action.type) {
    
    case AUTH:
      window.localStorage.setItem('isAuthenticated', 'true')
      window.localStorage.setItem('id', action.payload)
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload
      }

    case LOGOUT:
      window.localStorage.clear()
      return {
        ...state,
        isAuthenticated: false
      }

    case ERR_MESSAGE: 
    return {
      ...state,
      errMessage: action.payload
    }

    default:
      return state
  }
}
