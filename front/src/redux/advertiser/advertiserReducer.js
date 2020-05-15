import { DATA_OF_CUSTOMER } from "../advertiser/actionTypes";

const initialState = {
  subject: "",
  nameBlogger: "",
  cash: "",
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
    default:
      return state;
  }
}
