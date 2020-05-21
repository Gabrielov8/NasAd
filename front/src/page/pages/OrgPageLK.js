import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auction from "../../conteiner/Auction";
import CabOrganization from "../../components/CabOrganization/CabOrganization";
import OrgLk from "../../conteiner/nav/navbars/OrgLk";
import MenuOrg from "../../components/OrgLk/MenuOrg";
// import MainPageOrg from '../../components/OrgLk/MainpageOrg';
import MainPageOrg from "../../components/OrgLk/MainPageOrg";
import LogoutOrg from "../../components/OrgLk/LogoutOrg";
import "../../css/orglk.css";
import SearchTender from "../../components/CabOrganization/SearchTender";
import CurrentTender from "../../conteiner/CurrentTender";
import AnnouncementAboutWin from "../../components/CabOrganization/AnnouncementAboutWin";
import ListTenders from "../../components/CabOrganization/List/ListTenders";
import ListAuctions from "../../components/CabOrganization/List/ListAuctions";
import Tenders from "../../components/CurrentUser/Tenders/MyTenders";
import SearchAuction from "../../components/CabOrganization/SearchAuction";

import AuctionManePageOrg from '../../components/OrgLk/AuctionMainPageOrg'
import Auctionfull from '../pages/fullcomponent/Auctionfull'
import '../../css/orglk.css'
import Homepagefull from './fullcomponent/Homepagefull';
import MyAuctionfull from './fullcomponent/MyAuctionfull'

export default class OrgPageLK extends Component {
  render() {
    return (
      <>
        {/* <div className="content-lk-blog-org">
          <MenuOrg />
          <MainPageOrg />
          <LogoutOrg />
          
        </div> */}

        {/* <OrgLk /> */}
        <Switch>
        <Route
            exact
            path="/"
            component={Homepagefull}
          />

          <Route
            exact
            path="/winAuction/:searchId"
            component={AnnouncementAboutWin}
          />

          <Route
            exact
            path="/search/:searchId"
            component={SearchAuction}
            // Search
          />

          <Route exact path="/ListAuction/:searchId" component={ListTenders} />

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
            path="/createauction"
            component={Auctionfull}
          />
          <Route
            exact
            path="/myauction"
            component={MyAuctionfull}
          />


          <Route
            exact
            path="/Tenders/:searchId"
            render={() => <Tenders tenders={this.props.tenders} />}
          />
        </Switch>
      </>
    );
  }
}
