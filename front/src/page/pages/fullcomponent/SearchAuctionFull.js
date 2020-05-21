import React, { Component } from 'react'
import SearchAuctionPageOrg from '../../../components/OrgLk/SearchAuctionPageOrg'
import MenuOrg from '../../../components/OrgLk/MenuOrg'
import LogoutOrg from '../../../components/OrgLk/LogoutOrg'

export default class SearchAuctionFull extends Component {
  render() {
    return (
      
        <div className="content-lk-blog-org">
          <MenuOrg />
          <SearchAuctionPageOrg/>
          
          <LogoutOrg />
          
        </div>
      
    )
  }
}
