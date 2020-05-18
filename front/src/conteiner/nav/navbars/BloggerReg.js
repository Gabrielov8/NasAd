import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom'
import Login from '../../auth/Login'
import Register from '../../auth/Register'
import { show_user } from '../../../redux/auth/auth-action'
import { connect } from 'react-redux'


class BloggerReg extends Component {

  clickHandler = () => {
    this.props.show_user()
  }

  render() {
    return (
      <Router>
        <Link to="/">
        <button onClick={this.clickHandler}>Для организаций</button>
        </Link>
        
        <nav>
          <h2>Blogger</h2>
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/orgReg">Для организаций</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <h1>Main page</h1>} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route render={() => <h1>404</h1>} />
          
        </Switch>
      </Router >
    )
  }
}

// export default BloggerReg
const mapDispatchToProps = (dispatch) => {
  return {
    show_user: () => dispatch(show_user())
  }
}

export default connect(null, mapDispatchToProps)(BloggerReg)
