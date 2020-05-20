import React, { Component } from 'react';
import { asyncSearchTender } from '../../redux/advertiser/FetchData/fetchSendToBase'
import { connect } from 'react-redux';

class Search extends Component {

  state = {
    arrMarkets: ["instagram", "vk", "facebook", "twitter", "ok", "telegram"]
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    let { select, minCost } = event.target;
    this.props.asyncSearchTender(select.value, minCost.value)
  }

  render() {
    let arr = this.props.searchTender.length !== 0 ?
      this.props.searchAuction.map(t =>
        <div>
          <hr />
          <p><b>Тема:</b>  {t.market}</p>
          <p><b>Описание:</b>  {t.minCost}</p>
        </div>) : "нет данных";

    return (
      <div>
        <form onSubmit={this.onSubmitForm} style={{ display: 'table-caption' }}>
          Соц.сеть:
          <select name='select' onSelect={() => this.onSelect}>
            {this.state.arrMarkets.map(m => <option>{m}</option>)}
          </select>
          <input required type="text" name="minCost" placeholder="мин.значение" />
          <input type="submit" value='Найти' />
        </form>
        {arr}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTender: state.advertiserReducer.searchTender,
  }
}

const mapDispatchToProps = {
  asyncSearchTender,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
