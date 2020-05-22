import {
  CURRENT_ORG,
} from '../types';

export function getCurrentOrg(id) {

  return async function (dispatch) {
    try {
      const response = await fetch(`/advertiser/${id}`);
      const { org } = await response.json();
      dispatch({
        type: CURRENT_ORG,
        payload: org,
      });
    } catch (e) {
      console.log(e)
    }
  }
}

export function editCurrentOrg(id, orgInfo) {
    
  return async function (dispatch) {
    try {
      const response = await fetch(`/advertiser/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orgInfo }),
      });
      const { org } = await response.json();
      dispatch({
        type: CURRENT_ORG,
        payload: org,
      });
    } catch (e) {
      console.log(e)
    }
  }
}
