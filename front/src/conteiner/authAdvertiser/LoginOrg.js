import React, { Component } from 'react'
import classes from './auth.module.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth_login_ad } from '../../redux/auth/auth-action'

class LoginAd extends Component {
  state = {
    email: '',
    password: '',
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
      <div className={classes.cont}>
        {this.props.auth ? <Redirect to="/homepage" /> : null}
        {this.props.err ? <p>{this.props.err}</p> : null}
        <form onSubmit={this.submitHandler} className={classes.auth}>
          <h2>Login</h2>
          <input type="email" name="email" onChange={this.changeHandler} placeholder="email" />
          <input type="password" name="password" onChange={this.changeHandler} />
          <input type="submit" value="Войти" />
        </form>
      </div>
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
