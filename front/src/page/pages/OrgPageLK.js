import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../../css/orglk.css";
import SearchTender from "../../components/CabOrganization/SearchTender";
import CurrentTender from "../../conteiner/CurrentTender";
import AnnouncementAboutWin from "../../components/CabOrganization/AnnouncementAboutWin";
import ListTenders from "../../components/CabOrganization/List/ListTenders";
import ListAuctions from "../../components/CabOrganization/List/ListAuctions";
import TenderFull from "../pages/fullcomponent/Tenderfull";
import SearchAuction from "../../components/CabOrganization/SearchAuction";

import AuctionManePageOrg from '../../components/OrgLk/AuctionMainPageOrg'
import Auctionfull from '../pages/fullcomponent/Auctionfull'
import '../../css/orglk.css'
import Homepagefull from './fullcomponent/Homepagefull';
import MyAuctionfull from './fullcomponent/MyAuctionfull'
import SearchAuctionFull from "./fullcomponent/SearchAuctionFull";
import SearchTenderFull from "./fullcomponent/SearchTenderFull";
import WinTenderFull from "./fullcomponent/WinTenderFull";
import ParcerPagefull from "./fullcomponent/ParcerPagefull";

export default class OrgPageLK extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            component={Homepagefull}
          />


          {/* <Route
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

          <Route exact path="/ListAuction/:searchId" component={ListTenders} /> */}

          {/* <Route
            exact
            path="/SearchTender/:searchId"
            component={SearchTender}
          />

          <Route
            exact
            path="/SearchAllAuction/:searchId"
            component={ListAuctions}
          /> */}
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
            path="/parcer"
            component={ParcerPagefull}
          />

          <Route
            exact
            path="/searchAuction"
            component={SearchAuctionFull}
          />

          <Route
            exact
            path="/searchTender"
            component={SearchTenderFull}
          />

          <Route
            exact
            path="/winTender"
            component={WinTenderFull}
          />


          <Route
            exact
            path="/currenttender/:tenderID"
            component={TenderFull} />}
          />

        </Switch>
      </>
    );
  }
}
