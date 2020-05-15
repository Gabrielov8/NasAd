import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { out } from '../../redux/auth/auth-action'

 class Logout extends Component {

  clickHandler = (event) => {
    event.preventDefault()
    this.props.logout()
    this.props.history.push(`/`)
  }
  
  render() {
    
    return (
      <>
       <NavLink to="/logout" onClick={this.clickHandler}>Logout</NavLink>
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(out())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout))
