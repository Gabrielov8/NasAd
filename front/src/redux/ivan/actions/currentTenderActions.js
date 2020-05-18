import {
  GET_CURRENT_TENDER,
} from '../types';

export function getCurrentTender(id) {
  return async function (dispatch) {
    try {
      const response = await fetch(`/currenttender/${id}`)
      const { tender } = await response.json();
      dispatch({
        type: GET_CURRENT_TENDER,
        payload: tender,
      });
    } catch (e) {
      console.log(e)
    }
  }
}

export function addBetTender(tenderId, orgId, bet, ws) {
  return async function (dispatch) {
    try {
      
      // ws.onopen = () => {
        // console.log('Connection start');
        ws.send(JSON.stringify({
          tenderId, orgId, bet
        }))
      // }

      // ws.onmessage = (event) => {
      //   const tender = JSON.parse(event.data);
      //   dispatch({
      //     type: GET_CURRENT_TENDER,
      //     payload: tender,
      //   });
      // }
    } catch (e) {
      console.log(e)
    }
  }
}
