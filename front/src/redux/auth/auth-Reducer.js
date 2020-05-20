import { AUTH, LOGOUT, ERR_MESSAGE, SHOW_USER, AUTH_ORG } from "./auth-actionTypes"

const initialState = {
  isAuthenticated: !!window.localStorage.getItem('isAuthenticated') || false,
  errMessage: false,
  seccess: false,
  id: "",
  // blogger: !window.localStorage.getItem('blogger') || false,
  blogger: window.localStorage.getItem('blogger') === 'true',
  // org: !!window.localStorage.getItem('org') || false,
}

export default function (state = initialState, action) {

  switch (action.type) {

    case AUTH:
      window.localStorage.setItem('blogger', 'true')
      window.localStorage.setItem('org', 'false')
      window.localStorage.setItem('isAuthenticated', 'true')
      window.localStorage.setItem('id', action.payload)
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload,
        blogger: true
      }

    case AUTH_ORG:
      window.localStorage.setItem('blogger', 'false')
      window.localStorage.setItem('org', 'true')
      window.localStorage.setItem('isAuthenticated', 'true')
      window.localStorage.setItem('id', action.payload)
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload,
        blogger: false,
        org: true
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
      window.localStorage.setItem('blogger', !state.blogger)
      return {
        ...state,
        blogger: !state.blogger
      }

    default:
      return state
  }
}
