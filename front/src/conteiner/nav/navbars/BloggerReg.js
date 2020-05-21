import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom'
import { show_user } from '../../../redux/auth/auth-action'
import { connect } from 'react-redux'
import classes from '../../../css/bloggerLog.module.css'


class BloggerReg extends Component {

  clickHandler = () => {
    this.props.show_user()
  }

  render() {
    return (

        <nav className={classes['nav-blogger']}>
          <h1>NasAd</h1>
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <Link to="/">
                <button onClick={this.clickHandler}>Для организаций</button>
              </Link>
            </li>
          </ul>
        </nav>
 
    )
  }
}

// export default BloggerReg
const mapDispatchToProps = (dispatch) => {
  return {
    show_user: () => dispatch(show_user())
  }
}

export default connect(null, mapDispatchToProps)(BloggerReg)
