import React from 'react';
import { connect } from 'react-redux';
import {
  getCurrentUser,
  editCurrentUser,
} from '../../redux/ivan/actions/currentUserActions.js';
import UserInfo from '../CurrentUser/User/UserInfo';

class LogoutBlock extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="foto-block" >
        <div className="logout">
          <h3>Logout</h3>
          <i className="fas fa-sign-out-alt"></i>
        </div>

        <div className="foto">
          <img src="/imgBloggerLk/profile.svg" alt="" />

          <p>{this.props.user.user.login}</p>
          <span>Blogger</span>
        </div>
        <UserInfo />
        <div className="social">
          <p>Мои социальныe сети</p>
          <ul>
            <li>Инстаграм</li>
            <li>Вконтакте</li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStatetoProps, {
  getCurrentUser,
  editCurrentUser,
})(LogoutBlock);
