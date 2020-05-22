import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment-with-locales-es6';
import { withRouter } from 'react-router-dom';
import {
  getCurrentOrg,
} from '../../redux/ivan/actions/currentOrg';
import {
  getFromBaseOfTender
} from '../../redux/advertiser/FetchData/fetchSendToBase';

import Tender from '../../conteiner/CurrentTender';

class MainPageOrg extends React.Component {
  
  componentDidMount() {

    this.props.getCurrentOrg(localStorage.getItem('id'));
    // this.props.getFromBaseOfTender(this.props.match.tenderID)
  }

  render() {

    return (
      <div className="main-page-org" >
        <div className="dashboard-info-org">
          <h3>Dashboard</h3>
          <p>{moment().format('dddd')}   {moment().format('MMMM Do YYYY')}</p>
        </div>

        <div className="welcome-org">
          <div className="text-org">
            <h3>Welcome back {this.props.org.org.login}!</h3>
            <p>Мы скучали по Вам, заходите почаще!</p>
          </div>
          <img src="/imgBloggerLk/vhod.svg" alt="" />
        </div>

        <div className="info-block-org">
          <div className="first-org">
            <Tender />
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
withRouter(MainPageOrg)
export default connect(mapStatetoProps, {
  getCurrentOrg,
  getFromBaseOfTender
})(MainPageOrg);
