import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addAuctionForm,
  changeShowTenders,
  showHome,
} from '../../../redux/ivan/actions/mainPageActions';

class BloggerLk extends Component {

  onClickAddAuctionHandler = (event) => {
    event.preventDefault()
    this.props.addAuctionForm();
  }

  onClickChangeTenders = (event) => {
    event.preventDefault()
    this.props.changeShowTenders();
  }

  onClickHomepageHandler =(event) => {
    event.preventDefault()
    this.props.showHome();
  }

  render() {
    return (
      <ul>
        <li>
          <NavLink
            to="/homepage"
            onClick={this.onClickHomepageHandler}
          >homepage
           </NavLink>
        </li>
        <li>
          <NavLink
            to={`/homepage/${window.localStorage.getItem('id')}`}
            onClick={this.onClickAddAuctionHandler}
          >Объявить аукцион
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/allauction'
            onClick={this.onClickChangeTenders}
          >Просмотреть все запросы предложений
          </NavLink>
        </li>
      </ul>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    app: state.app
  }
}

export default connect(mapStatetoProps, {
  addAuctionForm,
  changeShowTenders,
  showHome,
})(BloggerLk);
