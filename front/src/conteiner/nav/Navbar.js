import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CurrentAuction from '../CurrentAuction';
import CurrentUser from '../CurrentUser';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Logout from '../auth/Logout';

class Navbar extends Component {

  render() {

    return (
      <Router>
        {this.props.auth
          ?
          <>
            <nav>
              <ul>
                <li>
                  <NavLink to={`/homepage/${window.localStorage.getItem('id')}`}>homepage</NavLink>
                </li>
                <li>
                  <Logout />
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/homepage/:id" exact component={CurrentUser} />
            </Switch>
          </>
          :
          <>
            <ul>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>

          </>
        }

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/currentauction/:userid/:auctionid" component={CurrentAuction} />

        </Switch>


      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.isAuthenticated
  }
}

export default connect(mapStateToProps)(Navbar)
