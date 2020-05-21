import {
  ADD_AUCTION_FORM,
  CHANGE_SHOW_TENDERS
} from '../types'

export function addAuctionForm() {
  return { type: ADD_AUCTION_FORM }
}

export function changeShowTenders() {
  return { type: CHANGE_SHOW_TENDERS }
}
