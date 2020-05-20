import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import CurrentUser from '../../CurrentUser';
import CurrentTender from '../../CurrentTender';
import Logout from '../../auth/Logout'
import Login from '../../auth/Login'
import Register from '../../auth/Register'
import Allauction from './Allauction';
import Parcer from './Parcer';


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
            <li>
              <NavLink to={`/homepage/${window.localStorage.getItem('id')}`}>BlogersPage</NavLink>
            </li>
            <li>
              <NavLink to='/allauction'>allauction</NavLink>
            </li>

          </ul>
          <Parcer></Parcer>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <h1>Личный кабинет</h1>} />
          <Route exact path="/homepage" >
            <h1>Homepage</h1>
          </Route>
          <Route exact path="/allauction" component={Allauction} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/homepage/:id" exact component={CurrentUser} />
          <Route path="/currenttender/:userid/:tenderid" exact component={CurrentTender} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    )
  }
}


export default BloggerLk
