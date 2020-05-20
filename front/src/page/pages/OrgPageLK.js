import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auction from '../../conteiner/Auction';
import CabOrganization from '../../components/CabOrganization/CabOrganization';

export default class OrgPageLK extends Component {

  render() {
    return (
      <>
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
