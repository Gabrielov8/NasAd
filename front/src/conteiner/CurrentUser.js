import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import UserInfo from '../components/CurrentUser/User/UserInfo';
import CashBalance from '../components/CurrentUser/User/CashBalance';
import EditUserInfo from '../components/CurrentUser/User/EditUserInfo';
import NewTender from '../components/CurrentUser/Tenders/newTender';
import Button from '../components/generalComponents/button';
import MyTenders from '../components/CurrentUser/Tenders/MyTenders';
import MyOffers from '../components/CurrentUser/Offers/MyOffers';
import Offers from '../components/CurrentUser/Offers/Offers';
import {
  getCurrentUser,
  editCurrentUser,
  addAuction,
  getAuctions,
  getAllOffers,
  addNewBetOnOffer,
} from '../redux/ivan/actions/currentUserActions.js';
import {
  showLoader,
  hideLoader,
} from '../redux/ivan/actions/appActions';

class CurrentUser extends React.Component {
  constructor() {
    super();
    this.state = {
      editInfo: false,
      addAuction: false,
      mytenders: false,
      myoffers: false,
      allOffers: false,
    }
  }

  async componentDidMount() {
    this.props.showLoader();
    this.props.getCurrentUser(this.props.match.params.id);
    this.props.hideLoader();
  }

  async сomponentDidUpdate(prevProps) {
    if (this.props.user.user.auctions.length !== prevProps.user.user.auctions.length) {
      this.props.getAuctions(this.props.match.params.id);
    }
  }

  onClickEditHandler = () => {
    this.setState({
      editInfo: true,
    })
  }

  onSubmitEditHandler = (event) => {
    event.preventDefault();
    this.props.showLoader();
    this.setState({
      editInfo: false,
    });
    const userInfo = Object.fromEntries(
      new FormData(event.target),
    );
    this.props.editCurrentUser(this.props.match.params.id, userInfo);
    this.props.hideLoader();
  }

  onClickNewAucHandler = () => {
    this.setState({
      addAuction: true,
    })
  }

  onSubmitNewAucHandler = (event) => {
    event.preventDefault();
    const newAuc = Object.fromEntries(
      new FormData(event.target),
    );
    this.props.addAuction(this.props.match.params.id, newAuc);
    this.setState({
      addAuction: false,
    })
  }

  onClickMyTendersHandler = (event) => {
    event.preventDefault();
    this.setState({
      editInfo: false,
      addAuction: false,
      mytenders: !this.state.mytenders,
      myoffers: false,
      allOffers: false
    })
  }

  onClickMyOffersHandler = (event) => {
    event.preventDefault();
    this.setState({
      editInfo: false,
      addAuction: false,
      mytenders: false,
      myoffers: !this.state.myoffers,
      allOffers: false,
    })
  };

  onClickAllOffersHandler = (event) => {
    event.preventDefault();
    this.setState({
      editInfo: false,
      addAuction: false,
      mytenders: false,
      myoffers: false,
      allOffers: !this.state.allOffers,
    })
    this.props.getAllOffers(this.props.match.params.id);
  }

  onClickNewBetOnOffer = (event) => {
    this.props.addNewBetOnOffer(this.props.match.params.id, event.target.id);
    this.setState({
      editInfo: false,
      addAuction: false,
      mytenders: false,
      myoffers: true,
      allOffers: false,
    })
  }

  render() {
    const { user } = this.props.user;

    return (
      <>
        <div>
          {!this.state.editInfo &&
            <>
              <UserInfo
                name={user.login}
                description={user.description}
              />
              <Button
                text="Отредактировать"
                onClick={this.onClickEditHandler}
              />
            </>}
          {this.state.editInfo &&
            <>
              <EditUserInfo
                onSubmit={this.onSubmitEditHandler}
              />
            </>}
        </div>
        <CashBalance
          money={user.money}
        />
        {!this.state.addAuction
          ?
          <Button
            text="Создать аукцион"
            onClick={this.onClickNewAucHandler}
          />
          :
          <NewTender
            onSubmit={this.onSubmitNewAucHandler}
          />}
        <NavLink to={`/homepage/${localStorage.id}`}
          onClick={this.onClickMyTendersHandler}
        >Мои аукционы
          </NavLink>

        <NavLink to={`/homepage/${localStorage.id}`}
          onClick={this.onClickMyOffersHandler}
        >Мои предложения
          </NavLink>

        <NavLink to={`/homepage/${localStorage.id}`}
          onClick={this.onClickAllOffersHandler}
        >Просмотреть запросы предложений
          </NavLink>

        {this.state.mytenders &&
          this.props.user.user.tenders &&
          <MyTenders
            tenders={this.props.user.user.tenders}
          />
        }
        {this.state.myoffers &&
          this.props.user.user.auctions &&
          <MyOffers
            auctions={this.props.user.user.auctions}
          />
        }
        {this.state.allOffers &&
          this.props.user.offers &&
          <>
            <p>Здесь офферы</p>
            <Offers
              offers={this.props.user.offers}
              onClick={this.onClickNewBetOnOffer}
            />
          </>
        }
      </>
    )
  }
}

withRouter(CurrentUser);

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    app: state.app
  }
}

export default connect(mapStatetoProps, {
  getCurrentUser,
  showLoader,
  hideLoader,
  editCurrentUser,
  addAuction,
  getAuctions,
  getAllOffers,
  addNewBetOnOffer,
})(CurrentUser);
