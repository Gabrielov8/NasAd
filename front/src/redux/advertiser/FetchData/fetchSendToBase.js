import { saveDataToStore, pushArrayDataToStore } from "../actions";

export function dataOfCustomerSendToBase(subject, nameBlogger, cash) {
  let creator = localStorage.getItem("id");
  return async (dispatch) => {
    await fetch("/advertiser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ subject, nameBlogger, cash, creator }),
    });
    dispatch(saveDataToStore(subject, nameBlogger, cash));
  };
}

export function asyncGetDataFromBase(creator) {
  return async (dispatch) => {
    let response = await fetch("/advertiser/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ creator }),
    });
    const arrayData = await response.json();
    dispatch(pushArrayDataToStore(arrayData));
  };
}


export function sendIdOfBargainingToBase(id) {
  return async () => {
    await fetch("/advertiser/idBargaining", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id}),
    });
    // const json = await response.json();
  };
}

export function findWinInAuction() {
  let idOrganizer = localStorage.getItem("id");
  return async () => {
    let response = await fetch("/advertiser/findWinInAuction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({idOrganizer}),
    });
    const json = await response.json();
  };
}


