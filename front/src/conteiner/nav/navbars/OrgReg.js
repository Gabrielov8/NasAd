import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom'
import LoginOrg from '../../authAdvertiser/LoginOrg'
import RegisterOrg from '../../authAdvertiser/RegisterOrg'
import { connect } from 'react-redux'
import { show_user } from '../../../redux/auth/auth-action'

class OrgReg extends Component {

  clickHandler = () => {
    this.props.show_user()
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <Link to="/"><button onClick={this.clickHandler}>Для блоггеров</button></Link>
        
        {/* {this.props.blogger ? <Redirect to="/login" /> : null} */}
        <nav>
          <h2>Oraganization</h2>
          <ul>
            <li>
              <NavLink to="/loginOrg">Login</NavLink>
            </li>
            <li>
              <NavLink to="/regOrg">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Для блогеров</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <h1>Main page</h1>} />
          <Route exact path="/loginOrg" component={LoginOrg} />
          <Route exact path="/regOrg" component={RegisterOrg} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router >
    )
  }
}

// export default connect(map)(OrgReg)

const mapDispatchToProps = (dispatch) => {
  return {
    show_user: () => dispatch(show_user())
  }
}

export default connect(null, mapDispatchToProps)(OrgReg)
