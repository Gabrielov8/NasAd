import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Logout from '../../auth/Logout'

class BloggerLk extends Component {
  render() {
    return (
        <ul>
          <li>
            <NavLink to="/homepage">homepage</NavLink>
          </li>
          <li>
            <NavLink to={`/homepage/${window.localStorage.getItem('id')}`}>BlogersPage</NavLink>
          </li>
          <li>
            <NavLink to='/allauction'>allauction</NavLink>
          </li>
        </ul>
    )
  }
}


export default BloggerLk
