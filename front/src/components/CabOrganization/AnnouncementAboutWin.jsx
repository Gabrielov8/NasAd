import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findWinInAuction } from '../../redux/advertiser/FetchData/fetchSendToBase'

class AnnouncementAboutWin extends Component {

  componentDidMount() {
    this.props.findWinInAuction()
  }

  render() {
    let winner = this.props.winAuctions.length !== 0 ? this.props.winAuctions.map(w =>
      <div className="win-block">
        <h2>Вы выиграли в тендере:</h2>
        <p>У блогера: {w.initator.login}</p>
        <p>Тема: {w.title}</p>
        <p>Сумма: {w.winner.betWinner}</p>
        
      </div>) : "нет оповещений"
    return (
      <div>
        {winner}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    winAuctions: state.advertiserReducer.winAuctions
  }
}

const mapDispatchToProps = {
  findWinInAuction,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementAboutWin);
