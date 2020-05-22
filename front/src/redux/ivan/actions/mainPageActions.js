import {
  ADD_AUCTION_FORM,
  CHANGE_SHOW_TENDERS,
  SHOW_CURRENT_TENDER,
  SHOW_HOME,
  SHOW_SOCIAL
} from '../types'

export function addAuctionForm() {
  return { type: ADD_AUCTION_FORM }
}

export function changeShowTenders() {
  return { type: CHANGE_SHOW_TENDERS }
}

export function showCurrentTender() {
  return { type: SHOW_CURRENT_TENDER }
}

export function showHome() {
  return { type: SHOW_HOME }
}

export function showSocial() {
  return { type: SHOW_SOCIAL }
}



