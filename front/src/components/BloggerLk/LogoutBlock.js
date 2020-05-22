import React from 'react';
import { connect } from 'react-redux';
import {
  getCurrentUser,
  editCurrentUser,
} from '../../redux/ivan/actions/currentUserActions.js';
import UserInfo from '../CurrentUser/User/UserInfo';
import EditUserInfo from '../CurrentUser/User/EditUserInfo'
import Button from '../generalComponents/button';
import Logout from '../../conteiner/auth/Logout'


class LogoutBlock extends React.Component {

  constructor() {
    super();
    this.state = {
      editInfo: false,
    }
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  onClickEditHandler = () => {
    this.setState({
      editInfo: true, 
    })
  }

  onSubmitEditHandler = (event) => {
    event.preventDefault();

    this.setState({
      editInfo: false,
    });
    const userInfo = Object.fromEntries(
      new FormData(event.target),
    );
    this.props.editCurrentUser(localStorage.getItem('id'), userInfo);
  }

  render() {
    return (
      <div className="foto-block" >
        <div className="logout">
          <Logout />
          {/* <h3>Logout</h3> */}
          <i className="fas fa-sign-out-alt"></i>
        </div>

        <div className="foto">
          <img src="/imgBloggerLk/profile.svg" alt="" />

          <p>{this.props.user.user.login}</p>
          <span>Blogger</span>
        </div>
        <div>
          {!this.state.editInfo &&
            <>
              <UserInfo
                description={this.props.user.user.description}
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
        <div>
          

        </div>
        <div className="social">
          <p>Мои социальныe сети</p>
          <ul>
            <li>Инстаграм </li>
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
