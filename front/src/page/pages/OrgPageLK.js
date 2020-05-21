import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../../css/orglk.css";
import Auctionfull from '../pages/fullcomponent/Auctionfull'
import '../../css/orglk.css'
import Homepagefull from './fullcomponent/Homepagefull';
import MyAuctionfull from './fullcomponent/MyAuctionfull'
import SearchAuctionFull from "./fullcomponent/SearchAuctionFull";
import SearchTenderFull from "./fullcomponent/SearchTenderFull";
import WinTenderFull from "./fullcomponent/WinTenderFull";

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
        </Switch>
      </>
    );
  }
}
