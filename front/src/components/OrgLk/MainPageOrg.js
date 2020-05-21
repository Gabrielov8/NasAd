
import React from 'react'
import CabOrganization from '../CabOrganization/CabOrganization'
import Auction from '../../conteiner/Auction'
import Statistic from '../CabOrganization/Statistic'

export default function MainPageOrg() {
  return (
    <div className="main-page-org">
      <div className="dashboard-info-org">
        <h3>Dashboard</h3>
        <p>21 Мая Четверг</p>
      </div>

import { connect } from 'react-redux';
import moment from 'moment-with-locales-es6';
import {
  getCurrentOrg,
} from '../../redux/ivan/actions/currentOrg';

class MainPageOrg extends React.Component {

  componentDidMount() {
    this.props.getCurrentOrg(localStorage.getItem('id'));
  }


  render() {

    return (
      <div className="main-page-org" >
        <div className="dashboard-info-org">
          <h3>Dashboard</h3>
          <p>{moment().format('dddd')}   {moment().format('MMMM Do YYYY')}</p>
        </div>


      <div className="info-block-org">
        <div className="first-org">
        <Statistic />

        <div className="welcome-org">
          <div className="text-org">
            <h3>Welcome back {this.props.org.org.login}!</h3>
            <p>Мы скучали по Вам, заходите почаще!</p>
          </div>
          <img src="/imgBloggerLk/vhod.svg" alt="" />

       </div>

        <div className="info-block-org">
          <div className="first-org">
          </div>
          <div className="second-org">

          </div>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    org: state.org,
  }
}

export default connect(mapStatetoProps, {
  getCurrentOrg
})(MainPageOrg);
