import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findWinInAuction } from '../../redux/advertiser/FetchData/fetchSendToBase'

class AnnouncementAboutWin extends Component {

  componentDidMount() {
    this.props.findWinInAuction()
  }

  render() {
    let winner = this.props.winAuctions && this.props.winAuctions.map(w =>
      <div style={{ border: "2px solid grey", padding: 10, width: 300, margin: 10 }}>
        <h2>Вы выиграли в аукционе:</h2>
        <hr />
        <p>У блогера: {w._id}</p>
        <p>Тема: {w.subject}</p>
        <p>Сумма: {w.budget}</p>
      </div>)

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
