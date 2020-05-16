import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import LoginOrg from '../../authAdvertiser/LoginOrg'
import RegisterOrg from '../../authAdvertiser/RegisterOrg'
import Logout from '../../auth/Logout'

class OrgLk extends Component {
  render() {
    return (
      <Router>
        <nav>
          <h2>Advertister</h2>
          <ul>
            <li>
              <NavLink to="/homepage">homepage</NavLink>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" render={() => <h1>Личный кабинет</h1>} />
          <Route exact path="/homepage" >
            <h1>Homepage</h1>
          </Route>
          <Route exact path="/loginOrg" component={LoginOrg} />
          <Route exact path="/regOrg" component={RegisterOrg} />
          <Route render={() => <h1>404</h1>} />
        </Switch>

        {/* {this.props.auth ? this.props.auth ? <p>asd</p> : null : null} */}
      </Router>
    )
  }
}


export default OrgLk
