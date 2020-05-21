import React, { Component } from 'react'
import WinTenderPageOrg from '../../../components/OrgLk/WinTenderPageOrg'
import MenuOrg from '../../../components/OrgLk/MenuOrg'
import LogoutOrg from '../../../components/OrgLk/LogoutOrg'

export default class WinTenderFull extends Component {
  render() {
    return (
      
        <div className="content-lk-blog-org">
          <MenuOrg />
          <WinTenderPageOrg/>
          
          <LogoutOrg />
          
        </div>
      
    )
  }
}
