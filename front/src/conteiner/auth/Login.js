import React, { Component } from 'react'
import classes from './auth.module.css'

export default class Login extends Component {
  state = {
    login: '',
    password: ''
  }

  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }


  submitHandler = async(event) => {
    event.preventDefault()
    const { login, password } = this.state
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        login,
        password,
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className={classes.cont}>
        <form onSubmit={this.submitHandler} className={classes.auth}>
          <h2>Login</h2>
          <input type="text" name="login" onChange={this.changeHandler} />
          <input type="password" name="password" onChange={this.changeHandler} />
          <input type="submit" value="Войти" />
        </form>
      </div>
    )
  }
}
