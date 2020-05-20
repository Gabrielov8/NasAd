import {
  CURRENT_USER,
  CREATE_AUCTION,
  GET_ALL_CURRENT_AUC,
  ALL_AUCTIONS_FOR_USER,
  AUCTIONS_OF_USER,
} from '../types';

export function getCurrentUser(id) {

  return async function (dispatch) {
    try {
      const response = await fetch(`/currentuser/${id}`);
      const { user } = await response.json();
      dispatch({
        type: CURRENT_USER,
        payload: user
      });
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
        body: JSON.stringify({ userInfo }),
      });
      const { user } = await response.json();
      dispatch({
        type: CURRENT_USER,
        payload: user
      });
    } catch (e) {
      console.log(e)
    }
  }
}

export function getAuctions(id) {
  return async function (dispatch) {
    try {
      const response = await fetch(`/currentuser/currentauctions/${id}`)
      const { tenders } = await response.json();
      dispatch({
        type: GET_ALL_CURRENT_AUC,
        payload: tenders
      });
    } catch (e) {
      console.log(e)
    }
  }
}

export function addAuction(id, newAuc) {
  return async function (dispatch) {
    try {
      const response = await fetch(`/currentuser/newauction/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newAuc }),
      });

      const { user } = await response.json();

      dispatch({
        type: CREATE_AUCTION,
        payload: user,
      });


    } catch (e) {
      console.log(e)
    }
  }
}

export function deleteAuction(id, tenderID) {
  return async function (dispatch) {
    try {
      const response = await fetch(`/currentuser/${id}/${tenderID}`, {
        method: 'DELETE',
      });

      const { user } = await response.json();

      dispatch({
        type: CURRENT_USER,
        payload: user,
      });


    } catch (e) {
      console.log(e)
    }
  }
}

export function getAllOffers(id) {
  return async function (dispatch) {
    try {
      const response = await fetch(`/auction/allactive/${id}`);

      const { message } = await response.json();

      dispatch({
        type: ALL_AUCTIONS_FOR_USER,
        payload: message,
      });


    } catch (e) {
      console.log(e)
    }
  }
}

export function getMyOffers() {
  return async function (dispatch) {
    try {
      const response = await fetch('/auction/allauction', {
        method: 'POST',
      });

      const { message } = await response.json();

      dispatch({
        type: AUCTIONS_OF_USER,
        payload: message,
      });


    } catch (e) {
      console.log(e)
    }
  }
}

export function addNewBetOnOffer(userID, auctionID) {
  return async function (dispatch) {
    try {
      const response = await fetch('/auction/newbet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID, auctionID }),
      });

      const { user } = await response.json();

      dispatch({
        type: CURRENT_USER,
        payload: user
      });

    } catch (e) {
      console.log(e)
    }
  }
}
