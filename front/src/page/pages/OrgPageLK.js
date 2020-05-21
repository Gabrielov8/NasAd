import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auction from '../../conteiner/Auction';
import CabOrganization from '../../components/CabOrganization/CabOrganization';
import OrgLk from '../../conteiner/nav/navbars/OrgLk'
import MenuOrg from '../../components/OrgLk/MenuOrg';
// import MainPageOrg from '../../components/OrgLk/MainpageOrg';
import MainPageOrg from '../../components/OrgLk/MainPageOrg'
import LogoutOrg from '../../components/OrgLk/LogoutOrg'
import '../../css/orglk.css'

export default class OrgPageLK extends Component {
  render() {
    return (
      <>
        <div className="content-lk-blog-org">
          <MenuOrg />
          <MainPageOrg />
          <LogoutOrg />
        </div>

        <OrgLk />
        <Switch>
          <Route
            exact
            path="/createauction"
            component={Auction}
          />
          <Route
            exact
            path="/advertister"
            component={CabOrganization}
          />
        </Switch>
      </>
    )
  }
}
