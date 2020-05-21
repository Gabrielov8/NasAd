import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auction from '../../conteiner/Auction';
import CabOrganization from '../../components/CabOrganization/CabOrganization';
import OrgLk from '../../conteiner/nav/navbars/OrgLk'
export default class OrgPageLK extends Component {

  render() {
    return (
      <>
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
