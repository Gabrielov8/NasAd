import {
  CURRENT_USER,
  EDIT_USER_INFO,
} from '../types';

export function getCurrentUser(id) {

  return async function (dispatch) {
    try {
      const response = await fetch(`/currentuser/${id}`);
      const { user } = await response.json();
      dispatch({ type: CURRENT_USER, payload: user });
    } catch (e) {
      console.log(e)
    }
  }
}

export function editCurrentUser(id, userInfo) {
  return async function (dispatch) {
    try {
      const response = await fetch(`/currentuser/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInfo, }),
      });
    } catch (e) {
      console.log(e)
    }
  }
}

