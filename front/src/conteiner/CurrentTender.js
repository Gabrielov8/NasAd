import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Bet from '../components/Tender/Bet';
import Bets from '../components/Tender/Bets';
import {
  getCurrentTender,
  addBetTender,
} from '../redux/ivan/actions/currentTenderActions';


class CurrentTender extends React.Component {
  constructor() {
    super();
    this.state = {
      initiator: false
    }
    this.ws = new WebSocket('ws://localhost:3001/echo');
  }

  async componentDidMount() {
    await this.props.getCurrentTender(this.props.match.params.tenderid);
    if (this.props.tender.currentTender.initator === localStorage.getItem('id')) {
      this.setState({
        initiator: true
      })

    }


    this.ws.onopen = () => {
      console.log('Connection start');
    }

    this.ws.onmessage = (event) => {
      this.props.getCurrentTender(this.props.match.params.tenderid);
    }
  }

  onSubmitNewBetHandler = (event) => {
    event.preventDefault();
    const orgID = localStorage.getItem('id');
    this.props.addBetTender(this.props.match.params.tenderid, orgID, event.target.bet.value, this.ws);
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
            {!this.state.initiator &&
              <Bet
                onSubmit={this.onSubmitNewBetHandler}
              />}
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
