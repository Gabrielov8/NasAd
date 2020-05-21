import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Logout from '../../auth/Logout'

class BloggerLk extends Component {
  render() {
    return (
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
      </nav>
    )
  }
}


export default BloggerLk
