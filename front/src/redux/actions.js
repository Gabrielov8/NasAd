import { TEST, LOADEDAUCTION, ALLAUCTION,USERINAUCTION,USERSOCIAL,MYAUCTION } from "./actionTypes";
import { CREATEAUCTION } from "./actionTypes";

export function test() {
  return {
    type: TEST,
  };
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
    if(message){
      dispatch(loadedAuction(message))
    }
}
}

export function allauction(){
  return async function(dispatch) { 
    

    const responce = await fetch ('/auction/allauction', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({})
    })
    const {message} = await responce.json()
    console.log(message,'BBBB');
    if(message){
      dispatch(loadedallAuction(message))
    }
}
}

export function useraddauction(userid,auctionid){
  return async function(dispatch) { 
    

    const responce = await fetch ('/auction/userinauction', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({userid,auctionid})
    })
    
    const {message} = await responce.json()
    console.log(message,'BBBd-a');
    
    if(message){
      dispatch(userInAuction(message))
    }
}
}


export function parcer(userid,inst){
  return async function(dispatch) { 
    

    const responce = await fetch ('/auction/parcer', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({userid,inst})
    })
    
    const {message} = await responce.json()
    console.log(message,'BBBd-a');
    
    if(message){
      dispatch(usersociaL(message))
    }
}
}

export function myauctionfetch(userid){
  return async function(dispatch) { 
    

    const responce = await fetch ('/auction/myauction', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({userid})
    })
    
    const {message} = await responce.json()
    
    
    
    if(message){
      dispatch(myauction(message))
    }
}
}


export function selectbloger(userid,auctionid){
  return async function(dispatch) { 
    

    const responce = await fetch ('/auction/selectbloger', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({userid,auctionid})
    })
    const {message} = await responce.json() 
    if(message){
      dispatch(myauction(message))
    }
}
}





export function myauction(url){
  return {
    type:MYAUCTION,
    payload: url
  }
}



export function usersociaL(url){
  return {
    type:USERSOCIAL,
    payload: url
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

export function loadedallAuction(result){
  return {
    type:ALLAUCTION,
    payload: result
  }
}


export function userInAuction(result){
  return {
    type:USERINAUCTION,
    payload: result
  }
}
