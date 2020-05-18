import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CurrentTender from '../CurrentTender';
import CurrentUser from '../CurrentUser';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Logout from '../auth/Logout';
import CabOrganization from '../../components/CabOrganization/CabOrganization'

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
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/homepage/:id" exact component={CurrentUser} />
              <Route exact path={`/homepage/${window.localStorage.getItem('id')}`} >
                <h1>Homepage</h1>
              </Route>
              <Route exact path="/home">
                <h1>Home</h1>
              </Route>

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
              <li>
                <NavLink to="/org">ORG</NavLink>
              </li>
            </ul>
            <Route exact path='/org' component={CabOrganization} />
          </>
        }

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/currenttender/:userid/:auctionid"
            component={CurrentTender} />

        </Switch>
<Auction/>

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
