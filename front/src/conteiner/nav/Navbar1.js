import React, { Component } from 'react'
import { connect } from 'react-redux'
import BloggerReg from './navbars/BloggerReg'
import OrgReg from './navbars/OrgReg'
import OrgLk from './navbars/OrgLk'
import BloggerLk from './navbars/BloggerLk'
import { show_user } from '../../redux/auth/auth-action'
import { BrowserRouter } from 'react-router-dom'

class Navbar extends Component {
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
      <>
        {this.props.auth
          ?
          this.props.blogger
            ?
            <BloggerLk blogger={this.props.blogger} />
            :
            <OrgLk blogger={this.props.blogger}/>
          :
          this.props.blogger
            ?
            <BloggerReg blogger={this.props.blogger} />
            :
            <OrgReg blogger={this.props.blogger} />
        }
      </>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.isAuthenticated,
    blogger: state.authReducer.blogger
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    show_user: () => dispatch(show_user())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
