import React, { Component } from 'react'
import classes from './auth.module.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth_login } from '../../redux/auth/auth-action'

class Login extends Component {
  state = {
    email: '',
    password: '',
    // err: false,
    // message: false
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

    // const response = await fetch('/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   })
    // })

    // const { err, message } = await response.json()
    // console.log(err)
    // if (err) {
    //   this.setState({
    //     err: err
    //   })
    // }
    // if (message) {
    //   this.setState({
    //     message: true
    //   })
    // }
  }

  render() {
    console.log(this.props)
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
    auth_login: (email, password) => dispatch(auth_login(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 
