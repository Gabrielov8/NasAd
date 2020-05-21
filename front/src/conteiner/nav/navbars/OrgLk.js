import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import Logout from "../../auth/Logout";
import CabOrganization from "../../../components/CabOrganization/CabOrganization";
import Auction from "../../Auction";
import CurrentTender from "../../CurrentTender";
import Search from "../../../components/CabOrganization/Search";
import AnnouncementAboutWin from "../../../components/CabOrganization/AnnouncementAboutWin";
import ListAuction from "../../../components/CabOrganization/ListAuction/ListAuction";
import SearchTender from "../../../components/CabOrganization/SearchTender";
import Myauction from "./Myauction";


class OrgLk extends Component {

  render() {
    return (
     
  
        // <nav>
        //   <h2>Advertister</h2>
        //   <ul>
        //     <li>
        //       <NavLink to="/homepage">homepage</NavLink>
        //     </li>
        //     <li>
        //       <NavLink to="/createauction">createauction</NavLink>
        //     </li>
        //     <li>
        //       <NavLink to="/advertister">Advertister</NavLink>
        //     </li>
        //     <li>
        //       <NavLink to="/myauction">MyAuction</NavLink>
        //     </li>


        //     <li>
        //       <Logout />
        //     </li>
        //   </ul>
        // </nav>

       

       

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
