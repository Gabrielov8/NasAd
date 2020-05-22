import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Parcer from '../navbars/Parcer'
import {
  addAuctionForm,
  changeShowTenders,
  showHome,
  showSocial
} from '../../../redux/ivan/actions/mainPageActions';
import Parcerfull from '../../../page/pages/fullcomponent/Parcerfull';

class BloggerLk extends Component {

  onClickAddAuctionHandler = (event) => {
    event.preventDefault()
    this.props.addAuctionForm();
  }

  onClickChangeTenders = (event) => {
    event.preventDefault()
    this.props.changeShowTenders();
  }


  // onClickChangeSocial = (event) => {
  //   event.preventDefault()
  //   this.props.showSocial();
  // }

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
          >Домашняя страница
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
  showSocial
})(BloggerLk);
