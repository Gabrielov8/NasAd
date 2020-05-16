import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Logout from '../auth/Logout'
import CabOrganization from '../../components/CabOrganization/CabOrganization'

class Navbar extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
        {this.props.auth
          ?
          <>
            <nav>
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
              <Route exact path={`/homepage/${window.localStorage.getItem('id')}`} >
                <h1>Homepage</h1>
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
          {/* <Route exact path="/logout" component={Logout} /> */}
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
