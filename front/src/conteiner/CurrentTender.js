import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Bet from '../components/Tender/Bet';
import Bets from '../components/Tender/Bets';
import {
  getCurrentTender,
  addBetTender,
} from '../redux/ivan/actions/currentTenderActions';
import { deleteAuction } from '../redux/ivan/actions/currentUserActions.js';
import Button from '../components/generalComponents/button';


class CurrentTender extends React.Component {
  constructor() {
    super();
    this.state = {
      initiator: false,
      cost: 0,
      errorBet: '',
      start: false,
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
    if (this.props.tender.currentTender.state == 'Аукцион стартовал') {
      this.setState({
        start: true
      })
    }

    this.setState({
      cost: this.props.tender.currentTender.nextBet
    });


    this.timerId = setInterval(() => {
      const currentDate = Date.now();
      this.ws.send(JSON.stringify({ currentDate, id: this.props.match.params.tenderid }))
    }, 5000);

    this.ws.onmessage = async (event) => {
      await this.props.getCurrentTender(this.props.match.params.tenderid);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    this.ws.close();
  }

  onSubmitNewBetHandler = (event) => {
    event.preventDefault();
    const orgID = localStorage.getItem('id');
    if (event.target.bet.value < this.props.tender.currentTender.nextBet) {
      this.setState({
        errorBet: `Ваша ставка не может быть меньше ${this.props.tender.currentTender.nextBet} рублей`,
      })
    } else {
      this.props.addBetTender(this.props.match.params.tenderid, orgID, event.target.bet.value, this.ws);
    }
    event.target.bet.value = '';
  }

  onClickDeleteHandler = () => {
    this.props.deleteAuction(localStorage.getItem('id'), this.props.match.params.tenderid);
    window.location.replace(`/homepage/${localStorage.getItem('id')}`);
  }

  render() {


    return (
      <>
        {this.state.errorBet &&
          <p>{this.state.errorBet}</p>
        }
        {
          this.props.tender.currentTender &&
          <div>
            <h2>
              {this.props.tender.currentTender.title}
            </h2>
            <h3>
              {this.props.tender.currentTender.state}
            </h3>
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

            {this.state.initiator &&
              <Button
                text="Отменить"
                onClick={this.onClickDeleteHandler}
              />
            }
            {!this.state.initiator
              &&
              this.state.start
              &&
              <Bet
                onSubmit={this.onSubmitNewBetHandler}
              />
            }
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
  deleteAuction,
})(withRouter(CurrentTender));
