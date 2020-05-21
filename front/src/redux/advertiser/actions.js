import {
  REFRESH_DATA_TO_STORE,
  GET_DATA_FROM_BASE,
  CHANGE_MIDDLE_COUNT,
  CHANGE_ACTIVE_BARGAINING,
  ADD_TENDER_TO_STORE,
  ADD_WIN_AUCTIONS,
  ADD_SEARCH_AUCTION,
  ADD_SEARCH_TENDER,
  SEARCH_ALL_AUCTION,
  CHANGE_CHECK
} from "./actionTypes";

export function saveDataToStore(subject, nameBlogger, cash) {
  return {
    type: REFRESH_DATA_TO_STORE,
    subject: subject,
    nameBlogger: nameBlogger,
    cash: cash,
  };
}

export function pushArrayDataToStore(arrayData) {
  return {
    type: GET_DATA_FROM_BASE,
    arrayData: arrayData,
  };
}

export function changeMiddleCount() {
  return {
    type: CHANGE_MIDDLE_COUNT,
  };
}

export function changeActiveBargaining() {
  return {
    type: CHANGE_ACTIVE_BARGAINING,
  };
}

export function addTenderToStore(tender) {
  return {
    type: ADD_TENDER_TO_STORE,
    tender: tender,
  };
}

export function addWinAuctions(winAuctions) {
  return {
    type: ADD_WIN_AUCTIONS,
    winAuctions: winAuctions,
  };
}

export function addSearchAuction (searchAuction) {
  return {
    type: ADD_SEARCH_AUCTION,
    searchAuction: searchAuction
  }
}

export function addSearchTender (searchTender) {
  return {
    type: ADD_SEARCH_TENDER,
    searchTender: searchTender
  }
}

export function searchAllAuction (allAuction) {
  return {
    type: SEARCH_ALL_AUCTION,
    allAuction: allAuction
  }
}

export function changeCheck (changeCheck) {
  return {
    type: CHANGE_CHECK,
    changeCheck: changeCheck
  }
}


