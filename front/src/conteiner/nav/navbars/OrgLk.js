import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import LoginOrg from "../../authAdvertiser/LoginOrg";
import RegisterOrg from "../../authAdvertiser/RegisterOrg";
import Logout from "../../auth/Logout";
import CabOrganization from "../../../components/CabOrganization/CabOrganization";
import Auction from "../../Auction";
import CurrentTender from "../../CurrentTender";
import Search from "../../../components/CabOrganization/SearchAuction";
import AnnouncementAboutWin from "../../../components/CabOrganization/AnnouncementAboutWin";
import ListAuctions from "../../../components/CabOrganization/List/ListAuctions";
import SearchTender from "../../../components/CabOrganization/SearchTender";
import ListTenders from "../../../components/CabOrganization/List/ListTenders";
import Tenders from "../../../components/CurrentUser/Tenders/MyTenders";

class OrgLk extends Component {

  render() {
    return (
      <Router>
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

        <Switch>
          <Route exact path="/" render={() => <h1>Личный кабинет</h1>} />
          <Route exact path="/homepage">
            <h1>Homepage</h1>
          </Route>
          <Route exact path="/loginOrg" component={LoginOrg} />
          <Route exact path="/createauction" component={Auction} />
          <Route exact path="/regOrg" component={RegisterOrg} />
          <Route exact path="/advertister" component={CabOrganization} />

          <Route
            exact
            path="/currenttender/:userid/:tenderid"
            component={CurrentTender} />

          <Route
            exact
            path="/winAuction/:searchId"
            component={AnnouncementAboutWin}
          />

          <Route
            exact
            path="/search/:searchId"
            component={Search}
          />

          <Route
            exact
            path="/ListAuction/:searchId"
            component={ListTenders}
          />

          <Route
            exact
            path="/SearchTender/:searchId"
            component={SearchTender}
          />

          <Route
            exact
            path="/SearchAllAuction/:searchId"
            component={ListAuctions}
          />

          <Route
            exact
            path="/Tenders/:searchId"
            render={() => <Tenders tenders={this.props.tenders} /> }
          />

          <Route render={() => <h1>404</h1>} />
        </Switch>

      </Router>
    );
  }
}

export default OrgLk;
