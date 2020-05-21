import React from 'react'
import Logout from '../../conteiner/auth/Logout'
import { connect } from 'react-redux';
import {
  getCurrentOrg,
  editCurrentOrg,
} from '../../redux/ivan/actions/currentOrg';
import Button from '../generalComponents/button';
import OrgInfo from '../CurrentOrg/OrgInfo';
import EditOrgInfo from '../CurrentOrg/EditOrgInfo';

class LogoutOrg extends React.Component {

  constructor() {
    super();
    this.state = {
      editInfo: false,
    }
  }

  componentDidMount() {
    this.props.getCurrentOrg(localStorage.getItem('id'));
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
    
    const orgInfo = Object.fromEntries(
      new FormData(event.target),
    );
    this.props.editCurrentOrg(localStorage.getItem('id'), orgInfo);
  }

  render() {

    return (
      <div className="foto-block-org" >
        <div className="logout-org">
          <Logout />
          <i className="fas fa-sign-out-alt"></i>
        </div>

        <div className="foto-org">
          <img src="/imgBloggerLk/profile.svg" alt="" />
          <p>{this.props.org.org.login}</p>
          <span>Самый лучший рекламодатель!</span>
        </div>
      <div className="title-ad">
        {!this.state.editInfo &&
          <>
            <OrgInfo
              description={this.props.org.org.description}
            />
            <Button
              text="Отредактировать"
              onClick={this.onClickEditHandler}
            />
          </>}
          </div>
        {this.state.editInfo &&
          <>
            <EditOrgInfo
              onSubmit={this.onSubmitEditHandler}
            />
          </>}

        <div className="social-org">
          <p>Наши социальныe сети</p>
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
    org: state.org,
  }
}

export default connect(mapStatetoProps, {
  getCurrentOrg,
  editCurrentOrg,
})(LogoutOrg);
