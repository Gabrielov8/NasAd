import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { findWinInAuction } from "../../../redux/advertiser/FetchData/fetchSendToBase";
import { connect } from "react-redux";
import { addWinAuctions } from "../../../redux/advertiser/actions";
// import Logout from "../../auth/Logout";
// import CabOrganization from "../../../components/CabOrganization/CabOrganization";
// import Auction from "../../Auction";
// import CurrentTender from "../../CurrentTender";
// import Search from "../../../components/CabOrganization/SearchAuction";
// import AnnouncementAboutWin from "../../../components/CabOrganization/AnnouncementAboutWin";
// import ListAuctions from "../../../components/CabOrganization/List/ListAuctions";
// import SearchTender from "../../../components/CabOrganization/SearchTender";
// import ListTenders from "../../../components/CabOrganization/List/ListTenders";

// import Tenders from "../../../components/CurrentUser/Tenders/MyTenders";
// import Search from "../../../components/CabOrganization/Search";
// import ListAuction from "../../../components/CabOrganization/ListAuction/ListAuction";
// import Myauction from "./Myauction";

class OrgLk extends Component {
  componentDidMount = () => {
    this.props.findWinInAuction();
    this.time = setInterval(() => {
      this.props.findWinInAuction();
    }, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.time);
  }

  // componentDidUpdate (prevProps) {
  //   if (this.props.winAuctions.length != 0)  {
  //   if (prevProps.winAuctions.length !== this.props.winAuctions.length) {
  //     this.props.addWinAuctions(this.props.winAuctions.length)
  //     this.props.findWinInAuction()
  //   }
  // }
  // }

  render() {
    return (
      <>
        {/* <Switch>
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
        </Switch> */}

        <ul>
          <li>
            <NavLink to="/">Домашняя страница</NavLink>
          </li>
          <li>
            <NavLink to="/createauction">Создать аукцион</NavLink>
          </li>
          <li>
            <NavLink to="/myauction">Мои аукционы</NavLink>
          </li>
          <li>
            <NavLink to="/searchAuction">Поиск аукционов</NavLink>
          </li>
          <li>
            <NavLink to="/searchTender">Поиск тендеров</NavLink>
          </li>
          <li>
            <div>
              <NavLink to="/winTender">
                Оповещения &nbsp;
                <b style={{ color: "red", fontSize: 17 }}>
                  {this.props.winAuctions.length == 0
                    ? 0
                    : this.props.winAuctions.length}
                </b>
              </NavLink>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    winAuctions: state.advertiserReducer.winAuctions,
  };
};

const mapDispatchToProps = {
  findWinInAuction,
  addWinAuctions,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrgLk);
