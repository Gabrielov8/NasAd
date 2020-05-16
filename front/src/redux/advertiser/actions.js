import { GET_DATA_MONITORING } from "./actionTypes";

export function dataOfCustomerSendToBase(subject, nameBlogger, cash) {
  return async () => {
    let response = await fetch("/advertiser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, nameBlogger, cash }),
    });
    // let json = await response.json('')
  };
}

export function getData(middleCount, allBargaining, masBargaining) {
  return {
    type: GET_DATA_MONITORING,
    middleCount: middleCount,
    allBargaining: allBargaining,
    masBargaining: masBargaining,
  };
}

export function asyncGetData() {
  return async (dispatch) => {
    let response = await fetch("/advertiser/getData");
    let ddd = await response.json();
    dispatch(getData(ddd.middleCount, ddd.allBargaining, ddd.masBargaining));
  };
}
