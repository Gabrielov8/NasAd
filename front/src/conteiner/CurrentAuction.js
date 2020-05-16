import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../components/generalComponents/button';

class CurrentAuction extends React.Component {

  render() {

    return (
      <>

      </>
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

})(withRouter(CurrentAuction));
