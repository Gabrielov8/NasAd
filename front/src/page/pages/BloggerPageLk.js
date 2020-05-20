import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CurrentUser from '../../conteiner/CurrentUser';
import CurrentTender from '../../conteiner/CurrentTender';

export default class BloggerPageLk extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1>Main page</h1>}
          />
          <Route
            exact
            path="/homepage"
            component={CurrentUser}
          />
          <Route
            exact
            path="/currenttender/:userid/:tenderid"
            component={CurrentTender} />
        </Switch >

      </>
    )
  }
}
