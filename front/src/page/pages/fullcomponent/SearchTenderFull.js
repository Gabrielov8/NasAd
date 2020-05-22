import React, { Component } from 'react'
import SearchTenderPageOrg from '../../../components/OrgLk/SearchTenderPageOrg'
import MenuOrg from '../../../components/OrgLk/MenuOrg'
import LogoutOrg from '../../../components/OrgLk/LogoutOrg'

export default class SearchTenderFull extends Component {
  render() {
    return (
      
        <div className="content-lk-blog-org">
          <MenuOrg />
          <SearchTenderPageOrg/>
          
          <LogoutOrg />
          
        </div>
      
    )
  }
}
