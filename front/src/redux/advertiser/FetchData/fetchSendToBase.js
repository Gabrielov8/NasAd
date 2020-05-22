import {
  saveDataToStore,
  pushArrayDataToStore,
  addTenderToStore,
  addWinAuctions,
  addSearchAuction,
  addSearchTender,
  searchAllAuction,
  findStatistic
} from "../actions";

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
      body: JSON.stringify({ id }),
    });
  };
}

export function getFromBaseOfTender() {
  return async (dispatch) => {
    let response = await fetch("/advertiser/getTender");
    const { tender } = await response.json();
  
    dispatch(addTenderToStore(tender));
  };
}

export function findWinInAuction() {
  let idOrganizer = localStorage.getItem("id");
  return async (dispatch) => {
    let response = await fetch("/advertiser/findWinInAuction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ idOrganizer }),
    });
    const findWin = await response.json();
    dispatch(addWinAuctions(findWin));
  };
}

export function asyncSearchAuction(subscribers, budget) {
  return async (dispatch) => {
    let response = await fetch("/advertiser/searchAuction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ subscribers, budget }),
    });
    let findWin = await response.json();
    dispatch(addSearchAuction(findWin));
  };
}

export function asyncSearchTender(market, minCost) {
  return async (dispatch) => {
    let response = await fetch("/advertiser/searchTender", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ market, minCost }),
    });
    let findTenders = await response.json();
    dispatch(addSearchTender(findTenders));
  };
}

export function asyncSearchAllAuction() {
  return async (dispatch) => {
    let response = await fetch("/advertiser/searchAllAuction")
    let findAll = await response.json();
    dispatch(searchAllAuction(findAll));
  };
}


export function asyncFindStatistic() {
  let idCreator = localStorage.getItem("id");
  return async (dispatch) => {
    let response = await fetch("/advertiser/findStatistic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ idCreator }),
    });
    const findStatic = await response.json();
    dispatch(findStatistic(findStatic));
  };
}
