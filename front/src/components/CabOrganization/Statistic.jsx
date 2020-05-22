import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncFindStatistic } from '../../redux/advertiser/FetchData/fetchSendToBase'

class Statistic extends Component {

  state = {
    arrSubject: ['Приложения для смартфонов', 'Личный блог', 'Букмекерская контора', 'Личный бренд'],
    arrBarg: []
  }

  componentDidMount() {
    this.props.asyncFindStatistic()
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    let { select } = event.target;
    let mas = this.props.findStatistic.filter(m => m.subject == select.value)
    this.setState({
      ...this.state, arrBarg: mas
    })
  }

  render() {

    let search = this.state.arrBarg.length !== 0 ? this.state.arrBarg.map(m =>
      <div>
        <p> Тема: {m.subject}</p>
        <p> Подрисчиков: {m.subscribers}</p>
        <p> Стоимость: {m.budget}</p>
        <hr />
      </div>
    ) : null

    let middleCount = this.props.findStatistic.length !== 0 &&
      (this.props.findStatistic.reduce((sum, el) => sum + el.budget, 0) /
        this.props.findStatistic.length).toFixed(2)

    let middleSubscribers = this.props.findStatistic.length !== 0 &&
      (this.props.findStatistic.reduce((sum, el) => sum + el.subscribers, 0) /
        this.props.findStatistic.length).toFixed(0)

    return (
      <div>
        <p><b>Всего заявок </b>
          {this.props.findStatistic !== 0 ? this.props.findStatistic.length : 'у вас нет '}</p>
        <br />
        <p> <b>Среднее кол-во подписчиков у блогеров:</b> {middleSubscribers}</p><br />
        <p> <b>Cредний ценник:</b> {middleCount}</p>
        <br />
        <h3> Поск ваших заявок по тематике: </h3>
        <form onSubmit={this.onSubmitForm} >
          Тема:<select name='select' >
            {this.state.arrSubject.map(m => <option>{m}</option>)}
          </select>
          <p><input type="submit" value="Найти" /></p>
        </form> <br />
        <hr /> {search}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    findStatistic: state.advertiserReducer.findStatistic,
  }
}

const mapDispatchToProps = {
  asyncFindStatistic,
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
