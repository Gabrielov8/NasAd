import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { show_user } from '../../../redux/auth/auth-action'
import classes from '../../../css/orgRegister.module.css'
class OrgReg extends Component {

  clickHandler = () => {
    this.props.show_user()
  }

  render() {

    return (
      <>
        <nav className={classes.nav}>
          <ul>
            <li>
            <Link to="/"><button onClick={this.clickHandler}>Для блоггеров</button></Link>
            </li>
            <li>
              <NavLink to="/loginOrg">Login</NavLink>
            </li>
            <li>
              <NavLink to="/regOrg">Register</NavLink>
            </li>
          </ul>
          <h1>NasAd</h1>
        </nav>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    show_user: () => dispatch(show_user())
  }
}

export default connect(null, mapDispatchToProps)(OrgReg)
