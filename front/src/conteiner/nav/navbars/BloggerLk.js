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
          <NavLink to={`/homepage/${localStorage.id}`}
            onClick={this.onClickMyTendersHandler}
          >Мои аукционы
          </NavLink>
        </li>
        <li>
          <NavLink to={`/homepage/${localStorage.id}`}
            onClick={this.onClickMyOffersHandler}
          >Мои предложения
          </NavLink>
        </li>
        <li>
          <NavLink to={`/homepage/${localStorage.id}`}
            onClick={this.onClickAllOffersHandler}
          >Просмотреть запросы предложений
            </NavLink>
        </li>
      </ul>







    )
  }
}


export default BloggerLk
