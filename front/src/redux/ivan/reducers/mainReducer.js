import {
  ADD_AUCTION_FORM,
  CHANGE_SHOW_TENDERS,
} from '../types';

const initialState = {
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
        addForm: !state.addForm,
        myTenders: !state.myTenders,
      };
    case CHANGE_SHOW_TENDERS:
      return {
        ...state,
        MyOffers: !state.MyOffers,
        offers: !state.offers
      };

    default: return state;
  }
}
