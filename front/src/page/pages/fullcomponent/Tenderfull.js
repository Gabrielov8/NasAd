import React, { Component } from 'react'
import AllTender from '../../../components/OrgLk/AllTenders';
import MenuOrg from '../../../components/OrgLk/MenuOrg'
import LogoutOrg from '../../../components/OrgLk/LogoutOrg'


export default class SearchTenderFull extends Component {
  render() {
    return (

      <div className="content-lk-blog-org">
        <MenuOrg />
        <AllTender />
        <LogoutOrg />

      </div>

    )
  }
}
