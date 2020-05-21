import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import Logout from "../../auth/Logout";


class OrgLk extends Component {

  render() {
    return (
      <nav>
        <h2>Advertister</h2>
        <ul>
          <li>
            <NavLink to="/homepage">homepage</NavLink>
          </li>
          <li>
            <NavLink to="/createauction">createauction</NavLink>
          </li>
          <li>
            <NavLink to="/advertister">Advertister</NavLink>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </nav>
    );
  }
}

export default OrgLk;
