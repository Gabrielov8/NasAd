import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom';
import OrgLog from './pages/OrgLog'
import BloggerLog from './pages/BloggerLog'
import { connect } from 'react-redux'
import BloggerPageLk from './pages/BloggerPageLk';
import OrgPageLK from './pages/OrgPageLK';
import { show_user } from '../redux/auth/auth-action';
import Login from '../conteiner/auth/Login';
import Register from '../conteiner/auth/Register';
import LoginOrg from '../conteiner/authAdvertiser/LoginOrg';
import RegisterOrg from '../conteiner/authAdvertiser/RegisterOrg';

class MainPage extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/login"
            component={Login} />
          <Route
            exact
            path="/register"
            component={Register} />
          {/* <Route render={() => <h1>404</h1>} /> */}
          <Route
            exact
            path="/loginOrg"
            component={LoginOrg}
          />
          <Route
            exact
            path="/regOrg"
            component={RegisterOrg}
          />
        </Switch>
        <div>
          {this.props.auth
            ?
            this.props.blogger
              ?
              <BloggerPageLk blogger={this.props.blogger} />
              :
              <OrgPageLK blogger={this.props.blogger} />
            :
            this.props.blogger
              ?
              <BloggerLog blogger={this.props.blogger} />
              :
              <OrgLog blogger={this.props.blogger} />
          }
        </div>
      </>
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
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
