import { AUTH, LOGOUT, ERR_MESSAGE, SHOW_USER } from "./auth-actionTypes"

const initialState = {
  isAuthenticated: !!window.localStorage.getItem('isAuthenticated') || false,
  errMessage: false,
  seccess: false,
  id: "",
  blogger: true,
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

    case SHOW_USER: 
    return {
      ...state,
      blogger: !state.blogger
    }

    default:
      return state
  }
}
