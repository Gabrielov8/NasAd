import React, { Component } from 'react';
import { asyncSearchTender } from '../../redux/advertiser/FetchData/fetchSendToBase'
import { connect } from 'react-redux';

class Search extends Component {

  state = {
    arrMarkets: ["vk"]
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    let { select, minCost } = event.target;
    this.props.asyncSearchTender(select.value, minCost.value)
  }

  render() {
    let arr = this.props.searchTender.length !== 0 ?
      this.props.searchTender.map(t =>
        <div>
          <hr />
          <p><b>Заголовок:</b>  {t.title}</p>
          <p><b>Соц.сеть:</b>  {t.market}</p>
          <p><b>Мин.сумма</b>  {t.minCost}</p>
          <p><b>Шаг</b>  {t.step}</p>
          <p><b>creator:</b>  {t.initator.login}</p>
        </div>) : null;

    return (
      <div>
       <h3>Поиск тендеров</h3>  <br />
        <form onSubmit={this.onSubmitForm} style={{ display: 'table-caption' }}>
          Соц.сеть:
          <select name='select' onSelect={() => this.onSelect}>
            {this.state.arrMarkets.map(m => <option>{m}</option>)}
          </select>
          <input required type="text" name="minCost" placeholder="мин.значение" />
          <input  className="btn-searchTender" type="submit" value='Найти' />
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
