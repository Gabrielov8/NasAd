import React, { Component } from 'react'
import classes from './auth.module.css'

export default class Register extends Component {
  render() {
    return (
      <div className={classes.cont}>
        <form onSubmit={this.submitHandler} className={classes.auth}>
          <h2>Register</h2>
          <input type="text" name="login" />
          <input type="email" name="email" />
          <input type="password" name="password" />
          <input type="submit" value="Зарегистрироваться" />
        </form>
      </div>
    )
  }
}
