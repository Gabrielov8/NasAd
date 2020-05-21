import React, { Component } from 'react'
import AuctionMainPageOrg from '../../../components/OrgLk/AuctionMainPageOrg'
import MenuOrg from '../../../components/OrgLk/MenuOrg'
import LogoutOrg from '../../../components/OrgLk/LogoutOrg'

export default class Auctionfull extends Component {
  render() {
    return (
      
        <div className="content-lk-blog-org">
          <MenuOrg />
          <AuctionMainPageOrg/>
          
          <LogoutOrg />
          
        </div>
      
    )
  }
}
