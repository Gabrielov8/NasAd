import { TEST } from "./actionTypes";
import { CREATEAUCTION } from "./actionTypes";

export function test(){
  return {
    type: TEST
  }
}

export function createauction(auction){
  return {
    type: CREATEAUCTION,
    value: auction
  }
}
