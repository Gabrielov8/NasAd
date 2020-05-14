import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/register" component={Register} /> 
        </Switch>
      </Router>
    )
  }
}
