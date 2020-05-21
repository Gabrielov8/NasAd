import React, { Component } from 'react';
import { asyncSearchAuction } from '../../redux/advertiser/FetchData/fetchSendToBase'
import { connect } from 'react-redux';

class Search extends Component {

  onSubmitForm = (event) => {
    event.preventDefault()
    let { subscribers, budget } = event.target;
    this.props.asyncSearchAuction(subscribers.value, budget.value)
  }

  render() {
    let arr = this.props.searchAuction.length !== 0 ?
      this.props.searchAuction.map(m =>
        <div>
          <hr />
          <p><b>Тема:</b>  {m.subject}</p>
          <p><b>Подписчиков:</b>  {m.subscribers}</p>
          <p><b>Бюджет:</b> {m.budget}</p>
          <p><b>Блогер:</b> {m.usercreate.login}</p>
          
        </div>) : null

    return (
      <div>
       <h3>Поиск аукционов</h3> <br />
        <form onSubmit={this.onSubmitForm} style={{display: 'table-caption'}}>
          <input required type="text" name="subscribers" placeholder="сколько подписчиков" />
          <input required type="text" name="budget" placeholder="бюджет" />
          <input type="submit" value='Найти'/>
        </form>
        {arr}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    searchAuction: state.advertiserReducer.searchAuction,
  }
}

const mapDispatchToProps = {
  asyncSearchAuction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
