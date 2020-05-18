import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Bet from '../components/Tender/Bet';
import Bets from '../components/Tender/Bets';
import {
  getCurrentTender,
  addBetTender,
} from '../redux/ivan/actions/currentTenderActions';

// const ws = new WebSocket('ws://localhost:3001/echo');
class CurrentTender extends React.Component {
  ws = new WebSocket('ws://localhost:3001/echo');
   componentDidMount() {
    this.props.getCurrentTender(this.props.match.params.tenderid);

    
    this.ws.onopen = () => {
      console.log('Connection start');
    }

    this.ws.onmessage = (event) => {
      console.log(5555);
      this.props.getCurrentTender(this.props.match.params.tenderid);
    }
}

onSubmitNewBetHandler = (event) => {
  event.preventDefault();
  console.log(this.ws)
  const orgID = localStorage.getItem('id');
  this.props.addBetTender(this.props.match.params.tenderid, orgID, event.target.bet.value, this.ws,);
  event.target.bet.value = '';
}

render() {

  return (
    <>
      {
        this.props.tender.currentTender &&
        <div>
          <h2>
            {this.props.tender.currentTender.title}
          </h2>
          <div>
            <h4>
              Ход торгов
              </h4>
            {
              this.props.tender.currentTender.bets.length &&
              <Bets
                bets={this.props.tender.currentTender.bets}
              />
            }
          </div>
          <Bet
            onSubmit={this.onSubmitNewBetHandler}
          />
        </div>
      }
    </>
  )
}
}

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    app: state.app,
    tender: state.tender,
  }
}

export default connect(mapStatetoProps, {
  getCurrentTender,
  addBetTender,
})(withRouter(CurrentTender));
