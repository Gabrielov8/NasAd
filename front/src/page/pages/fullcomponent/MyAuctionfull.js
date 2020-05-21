import React, { Component } from 'react'
import MyAuctionMainPage from '../../../components/OrgLk/MyAuctionMainPage'
import MenuOrg from '../../../components/OrgLk/MenuOrg'
import LogoutOrg from '../../../components/OrgLk/LogoutOrg'
// import MenuOrg 

export default class MyAuctionfull extends Component {
  render() {
    return (
      
        <div className="content-lk-blog-org">
          <MenuOrg />
         
          <MyAuctionMainPage></MyAuctionMainPage>
          <LogoutOrg />
          
        </div>
      
    )
  }
}
