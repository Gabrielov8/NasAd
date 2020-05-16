import { TEST, LOADEDAUCTION } from "./actionTypes";
import { CREATEAUCTION } from "./actionTypes";

export function test(){
  return {
    type: TEST
  }
}

export function createauction(newauction){
  return async function(dispatch) { 
    

    const responce = await fetch ('/auction', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({newauction})
    })
    dispatch(createAuctionStore(newauction))
    const {message} = await responce.json()
    console.log(message,'AAAAA');
    
    // console.log(result,'RESULT');
    if(message){
      dispatch(loadedAuction(message))
    }
}
}

export function createAuctionStore(url){
  return {
    type:CREATEAUCTION,
    payload: url
  }
}

export function loadedAuction(result){
  return {
    type:LOADEDAUCTION,
    payload: result
  }
}





// export function sendfetch () {
//   return async function (dispatch) {
//    const responce = await fetch ('https://api.thecatapi.com/v1/images/search?size=full')
//    const result = await responce.json()
//    dispatch(fetchUrl(result[0].url))

//   }
// }
