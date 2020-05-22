import React, { Component } from 'react'
import  ParcerMainPage from '../../../components/OrgLk/ ParcerMainPage'
import MenuOrg from '../../../components/OrgLk/MenuOrg'
import LogoutOrg from '../../../components/OrgLk/LogoutOrg'

export default class Auctionfull extends Component {
  render() {
    return (
      
        <div className="content-lk-blog-org">
          <MenuOrg />
         
          < ParcerMainPage/>
          <LogoutOrg />
          
        </div>
      
    )
  }
}
