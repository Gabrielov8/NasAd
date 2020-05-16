import {
  GET_CURRENT_AUC,
} from '../types';

export function getCurrentAuc(id) {
  return async function (dispatch) {
    try {
      const response = await fetch(`/currentuser/currentauctions/${id}`)
      const { auctions } = await response.json();
      dispatch({
        type: GET_CURRENT_AUC,
        payload: auctions
      });
    } catch (e) {
      console.log(e)
    }
  }
}
