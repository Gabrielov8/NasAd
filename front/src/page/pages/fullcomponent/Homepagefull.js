import React, { Component } from 'react'

import MenuOrg from '../../../components/OrgLk/MenuOrg'
import LogoutOrg from '../../../components/OrgLk/LogoutOrg'
import MainPageOrg from '../../../components/OrgLk/MainPageOrg'
// import MenuOrg 

export default class Homepagefull extends Component {
  render() {
    return (
      
        <div className="content-lk-blog-org">
          <MenuOrg />
        <MainPageOrg/>
          
          <LogoutOrg />
          
        </div>
      
    )
  }
}
