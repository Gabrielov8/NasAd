import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserInfo from '../components/CurrentUser/UserInfo';
import CashBalance from '../components/CurrentUser/CashBalance';
import EditUserInfo from '../components/CurrentUser/EditUserInfo';
import NewTender from '../components/CurrentUser/newTender';
import Button from '../components/generalComponents/button';
import Spinner from '../components/generalComponents/spinner';
import Tenders from '../components/CurrentUser/Tenders';
import {
  getCurrentUser,
  editCurrentUser,
  addAuction,
  getAuctions,
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
    }
  }

  async componentDidMount() {
    this.props.showLoader();
    this.props.getCurrentUser(this.props.match.params.id);
    this.props.getAuctions(this.props.match.params.id);
    this.props.hideLoader();
  }

  async сomponentDidUpdate(prevProps) {
    if (this.props.user.user.auctions.length !== prevProps.user.user.auctions.length) {
      console.log(222)
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

  render() {
    const { user } = this.props.user;

    if (this.props.app.loading) {
      return <Spinner />
    }

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

        {this.props.user.user.auctions &&
          <Tenders
            tenders={this.props.user.user.tenders}
          />}
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
})(CurrentUser);
