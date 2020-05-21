import React, { Component } from 'react'
// import class from '../../css/bloggerLog.module.css' 
import classes from './auth.module.css'
// import clas from '../../css/bloggerLog.module.css'
import { Redirect, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth_login_ad } from '../../redux/auth/auth-action'
// import '../auth/Modal.css';

class LoginAd extends Component {
  state = {
    email: '',
    password: '',
    modal: true,
  }
  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }
  submitHandler = async (event) => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.auth_login_ad(email, password)
  }
  render() {
    return (
      <React.Fragment>
        {this.state.modal
          &&
          <div
            className={classes['modal-blog']}>
            {this.props.auth ? <Redirect to="/homepage" /> : null}
            {this.props.err ? <p>{this.props.err}</p> : null}
            <div
              className={classes['modal-body-blog']}>
              <form
                onSubmit={this.submitHandler}
                className={classes.auth}
              >
                <NavLink
                  to="/regOrg"
                >Регистрация
                </NavLink>
                <h2>Login</h2>
                <input
                  type="email"
                  name="email"
                  onChange={this.changeHandler}
                  placeholder="email"
                />
                <input
                  type="password"
                  name="password"
                  onChange={this.changeHandler}
                />
                <input
                  type="submit"
                  value="Войти"
                />
              </form>
              <NavLink
                to="/"
                className={classes["modal-cancel"]}
              >X
              </NavLink>
            </div>
          </div>}
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    err: state.authReducer.errMessage,
    auth: state.authReducer.isAuthenticated
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    auth_login_ad: (email, password) => dispatch(auth_login_ad(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginAd)
