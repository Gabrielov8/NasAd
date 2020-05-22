import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import moment from 'moment-with-locales-es6';
import MyTenders from '../CurrentUser/Tenders/MyTenders';
import MyOffers from '../CurrentUser/Offers/MyOffers';
import Offers from '../CurrentUser/Offers/Offers';
import NewTender from '../CurrentUser/Tenders/newTender';
import {
  getCurrentUser,
  editCurrentUser,
  addAuction,
  getAuctions,
  getAllOffers,
  getMyOffers,
  addNewBetOnOffer,
} from '../../redux/ivan/actions/currentUserActions.js';
import { showCurrentTender } from '../../redux/ivan/actions/mainPageActions';
import CurrentTender from '../../conteiner/CurrentTender';

moment.locale('ru');
class MainPage extends React.Component {

  async componentDidMount() {
    this.props.getCurrentUser(localStorage.getItem('id'));
    this.props.getMyOffers(localStorage.getItem('id'));
    this.props.getAllOffers(localStorage.getItem('id'))
  }

  async сomponentDidUpdate(prevProps) {
    if (this.props.user.user.auctions.length !== prevProps.user.user.auctions.length) {
      this.props.getAuctions(localStorage.getItem('id'));
    }
  }

  onSubmitNewAucHandler = (event) => {
    event.preventDefault();
    const newAuc = Object.fromEntries(
      new FormData(event.target),
    );
    this.props.addAuction(localStorage.getItem('id'), newAuc);
    window.location.reload();
  }

  onClickNewBetOnOffer = (event) => {
    this.props.addNewBetOnOffer(localStorage.getItem('id'), event.target.id);
    window.location.reload();
  }

  onClickGetCurrentTender = () => {

    this.props.showCurrentTender();
  }

  render() {

    return (
      <div className="main-page" >
        <div className="dashboard-info">
          <h3>Dashboard</h3>
          <p>{moment().format('dddd')}   {moment().format('MMMM Do YYYY')}</p>
        </div>

        <div className="welcome">
          <div className="text">
            <h3>Welcome back {this.props.user.user.login}</h3>
            <p>Рекламодатели уже заждались тебя маленький негодник!</p>
          </div>
          <img src="/imgBloggerLk/vhod.svg" alt="" />
        </div>

      {this.props.main.auction
        ?
        <div className="info-block">
          <div className="first">
            {this.props.main &&
              this.props.main.myTenders &&
              this.props.user.user.tenders &&
              <MyTenders
                tenders={this.props.user.user.tenders}
                onClick={this.onClickGetCurrentTender}
              />
            }
            {this.props.main &&
              this.props.main.addForm &&
              <NewTender
                onSubmit={this.onSubmitNewAucHandler}
              />
            }
          </div>
          <div className="second">
            {this.props.main &&
              this.props.main.MyOffers &&
              this.props.user.user.auctions &&
              <>
                <h3>Ваши заявки:</h3>
                <MyOffers
                  auctions={this.props.user.user.auctions}
                />
              </>
            }
            {this.props.main &&
              this.props.main.offers &&
              this.props.user.offers &&
              <>
                <h3>Доступны для подачи заявок:</h3>
                <Offers
                  offers={this.props.user.offers}
                  onClick={this.onClickNewBetOnOffer}
                />
              </>
            }
            </div>
          </div>
          :
          <div className="info-block">
            <div className="first">
              <Route
                exact
                path="/currenttender/:tenderID"
                component={CurrentTender} />
            </div>
          </div>
        }
      </div>
    )
  }
}

withRouter(MainPage);

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    app: state.app,
    main: state.mainBloger
  }
}

export default connect(mapStatetoProps, {
  getCurrentUser,
  editCurrentUser,
  addAuction,
  getAuctions,
  getAllOffers,
  getMyOffers,
  addNewBetOnOffer,
  showCurrentTender,
})(MainPage);
