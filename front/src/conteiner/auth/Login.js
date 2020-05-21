import React, { Component } from 'react'
import classes from './auth.module.css'
import { Redirect, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth_login } from '../../redux/auth/auth-action'

class Login extends Component {
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
    this.props.auth_login(email, password)
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.modal &&
          <div
            className={classes['modal-blog']}>
            {
              this.props.auth
                ?
                <Redirect
                  to="/homepage"
                />
                :
                null
            }
            {
              this.props.err
                ?
                <p>
                  {this.props.err}
                </p>
                :
                null
            }
            <div
              className={classes['modal-body-blog']}>
              <form
                onSubmit={this.submitHandler}
                className={classes.auth}
              >
                <NavLink
                  to="/register"
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
                className={classes['modal-cancel-blog']}
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
    auth_login: (email, password) => dispatch(auth_login(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
