import {
  REFRESH_DATA_TO_STORE,
  GET_DATA_FROM_BASE,
  CHANGE_MIDDLE_COUNT,
  CHANGE_ACTIVE_BARGAINING,
  ADD_TENDER_TO_STORE
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

export function addTenderToStore (tender) {
  return {
    type: ADD_TENDER_TO_STORE,
    tender: tender,
  }
}
