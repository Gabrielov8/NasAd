import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserInfo from '../components/CurrentUser/UserInfo';
import CashBalance from '../components/CurrentUser/CashBalance';
import EditUserInfo from '../components/CurrentUser/EditUserInfo';
import Button from '../components/generalComponents/button';
import Spinner from '../components/generalComponents/spinner';
import {
  getCurrentUser,
  editCurrentUser,
} from '../redux/ivan/actions/currentUserActions.js';
import {
  showLoader,
  hideLoader,
} from '../redux/ivan/actions/appActions';

class CurrentUser extends React.Component {
  constructor() {
    super();
    this.state = {
      editInfo: false
    }
  }
  componentDidMount() {
    this.props.showLoader();
    this.props.getCurrentUser(this.props.match.params.id);
    this.props.hideLoader();
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

  render() {
    if (this.props.app.loading) {
      return <Spinner />
    }
    return (
      <>
        <h1>UsersPage</h1>
        <div>
          {!this.state.editInfo &&
            <>
              <UserInfo />
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
        <CashBalance />
        <Button
          text="Создать аукцион"
        />
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
})(CurrentUser);
