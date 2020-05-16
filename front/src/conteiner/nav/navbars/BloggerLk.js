import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Logout from '../../auth/Logout'
import Login from '../../auth/Login'
import Register from '../../auth/Register'

class BloggerLk extends Component {
  render() {
    return (
      <Router>
        <nav>
          <h2>BloggerNavbar</h2>
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    )
  }
}


export default BloggerLk
