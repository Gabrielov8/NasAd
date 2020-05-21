import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import Logout from "../../auth/Logout";


class OrgLk extends Component {

  render() {
    return (
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
        </ul>
    );
  }
}

export default OrgLk;
