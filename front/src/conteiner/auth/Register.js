import React, { Component } from 'react'
import classes from './auth.module.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth_register } from '../../redux/auth/auth-action'

class Register extends Component {
  state = {
    login: '',
    password: '',
  }

  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  submitHandler = async (event) => {
    event.preventDefault()
    const { login, email, password } = this.state
    this.props.auth_register(login, email, password)
    // const response = await fetch('/auth/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify({
    //     login,
    //     password,
    //     email,
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
          <h2>Register</h2>
          <input type="text" name="login" onChange={this.changeHandler} placeholder="login" />
          <input type="email" name="email" onChange={this.changeHandler} placeholder="email" />
          <input type="password" name="password" onChange={this.changeHandler} />
          <input type="submit" value="Зарегистрироваться" />
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
    auth_register: (login, email, password) => dispatch(auth_register(login, email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register) 
