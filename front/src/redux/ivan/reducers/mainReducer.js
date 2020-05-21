import {
  ADD_AUCTION_FORM,
  CHANGE_SHOW_TENDERS,
  SHOW_CURRENT_TENDER,
  SHOW_HOME,
} from '../types';

const initialState = {
  auction: true,
  addForm: false,
  myTenders: true,
  MyOffers: true,
  offers: false
}

export default function mainReducer(state = initialState, action) {

  switch (action.type) {

    case ADD_AUCTION_FORM:
      return {
        ...state,
        addForm: true,
        myTenders: false,
        auction: true,
      };
    case CHANGE_SHOW_TENDERS:
      return {
        ...state,
        MyOffers: !state.MyOffers,
        offers: !state.offers,
        auction: true,
      };
    case SHOW_CURRENT_TENDER:
      return {
        ...state,
        auction: false,
        addForm: false,
        myTenders: false,
        MyOffers: false,
        offers: false
      }
    case SHOW_HOME:
      return {
        ...state,
        auction: true,
        addForm: false,
        myTenders: true,
        MyOffers: true,
        offers: false
      }

    default: return state;
  }
}
