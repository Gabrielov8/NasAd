import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncSearchAllAuction } from '../../../redux/advertiser/FetchData/fetchSendToBase'

class ListAuctions extends Component {


  componentDidMount() {
    this.props.asyncSearchAllAuction()

  }

  render() {
    let arr = this.props.allAuction.length !== 0 ?
      this.props.allAuction.map(m =>
        <div>
          <hr />
          <p><b>Тема:</b>  {m.subject}</p>
          <p><b>Подписчиков:</b>  {m.subscribers}</p>
          <p><b>Бюджет:</b> {m.budget}</p>
          <p><b>Блогер:</b> {m.usercreate.login}</p>

        </div>) : "нет данных"
    return (
      <div>
        {arr}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allAuction: state.advertiserReducer.allAuction

  }
}

const mapDispatchToProps = {
  asyncSearchAllAuction
}


export default connect(mapStateToProps, mapDispatchToProps)(ListAuctions);
