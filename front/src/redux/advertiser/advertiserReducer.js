import {
  DATA_OF_CUSTOMER,
  GET_DATA_MONITORING,
} from "../advertiser/actionTypes";

const initialState = {
  // subject: "",
  // nameBlogger: "",
  // cash: "",
  middleCount: "",
  allBargaining: "",
  masBargaining: "",
};

export default function advertiserReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_OF_CUSTOMER:
      return {
        ...state,
        subject: action.subject,
        nameBlogger: action.nameBlogger,
        cash: action.cash,
      };
    case GET_DATA_MONITORING:
      return {
        ...state,
        middleCount: action.middleCount,
        allBargaining: action.allBargaining,
        masBargaining: action.masBargaining,
      };
    default:
      return state;
  }
}
