import { AUTH, LOGOUT, ERR_MESSAGE } from "./auth-actionTypes";

export function auth(id){
  return {
    type: AUTH,
    payload: id
  }
}

export function logout(){
  return {
    type: LOGOUT
  }
}

export function show_err_message(err){
  return {
    type: ERR_MESSAGE,
    payload: err
  }
}

export function out(){
  return async (dispatch) => {
    const response = await fetch('/auth/logout')
    const { message } = await response.json()
    if(message){
      dispatch(logout())
    }
  }
}

export function auth_login(email, password){
  return async (dispatch) => {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      })
    })
    const { err, message, user } = await response.json()
    if (err) {
      dispatch(show_err_message(err))
    }
    if(message){
      dispatch(auth(user))
    }
  }
}

export function auth_register(login, email, password){
  return async (dispatch) => {
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        login,
        email,
        password,
      })
    })
    const { err, message, user } = await response.json()
    if (err) {
      dispatch(show_err_message(err))
    }
    if(message){
      dispatch(auth(user))
    }
  }
}
