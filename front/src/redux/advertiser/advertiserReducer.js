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
  CHANGE_CHECK,
  FIND_STATISTIC
} from "./actionTypes";

const initialState = {
  subject: "",
  nameBlogger: "",
  cash: "",
  masBargaining: [],
  middleCount: 0,
  activeBargaining: 0,
  tenders: "",
  winAuctions: "",
  searchAuction: [],
  searchTender: [],
  allAuction:[],
  changeCheck: true,
  findStatistic:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REFRESH_DATA_TO_STORE:
      return {
        ...state,
        subject: action.subject,
        nameBlogger: action.nameBlogger,
        cash: action.cash,
        masBargaining: [
          ...state.masBargaining,
          {
            subject: action.subject,
            nameBlogger: action.nameBlogger,
            cash: action.cash,
            active: state.active,
          },
        ],
      };
    case GET_DATA_FROM_BASE:
      return {
        ...state,
        subject: state.subject,
        nameBlogger: state.nameBlogger,
        cash: state.cash,
        masBargaining: action.arrayData.arrayData,
      };
    case CHANGE_MIDDLE_COUNT:
      return {
        ...state,
        middleCount: (
          state.masBargaining.reduce((sum, el) => sum + Number(el.cash), 0) /
          state.masBargaining.length
        ).toFixed(2),
      };
    case CHANGE_ACTIVE_BARGAINING:
      return {
        ...state,
        activeBargaining: state.masBargaining.reduce(
          (sum, el) => el.active && sum + 1,
          0
        ),
      };
    case ADD_TENDER_TO_STORE:
      return {
        ...state,
        tenders: action.tender,
      };
    case ADD_WIN_AUCTIONS:
      return {
        ...state,
        winAuctions: action.winAuctions.findWin,
      };
    case ADD_SEARCH_AUCTION:
      return {
        ...state,
        searchAuction: action.searchAuction.find,
      };
    case ADD_SEARCH_TENDER:
      return {
        ...state,
        searchTender: action.searchTender.findTenders,
      };
    case SEARCH_ALL_AUCTION:
      return {
        ...state,
        allAuction: action.allAuction.findAll,
      };
    case CHANGE_CHECK:
      return {
        ...state,
        changeCheck: action.changeCheck,
      };
    case FIND_STATISTIC:
      return {
        ...state,
        findStatistic: action.findStatistic.findStatistic,
      };
    default:
      return state;
  }
}
