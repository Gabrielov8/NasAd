import React, { Component } from 'react';
import style from './CabOrganization.module.css'
import FormAnnouncement from './FormAnnouncement/FormAnnouncement';
import BargainingOfCustomer from './BargainingOfCustomer/BargainingOfCustomer';
import { connect } from 'react-redux'
import { asyncGetDataFromBase } from '../../redux/advertiser/FetchData/fetchSendToBase'
import { changeMiddleCount  } from '../../redux/advertiser/actions'
class CabOrganization extends Component {

  state = {
    check: false,
    showButton: true,
  }

  componentDidMount = () => {
    this.props.asyncGetDataFromBase(localStorage.getItem('id'))
  }

  componentDidUpdate = (PrevProps) => {
    if (this.props.masBargaining.length !== PrevProps.masBargaining.length) {
      this.props.changeMiddleCount()
      // this.props.changeActiveBargaining()
    }
  }

  showForm = () => {
    this.setState({ check: true, showButton: false })
  }

  render() {

    return (
      <div>
        <img alt='' className={style.avatar} />
        <h2> Личная страница заказчика </h2>
        <h2> Информация о заказчике: </h2>
        <ul>
          <li> Всего торгов: {this.props.masBargaining.length}</li>
          <li> Текущие торги: {this.props.masBargaining && this.props.activeBargaining} </li>
          <li> Средний ценник:  {this.props.middleCount === 'NaN' ? 0 : this.props.middleCount}</li>
        </ul>

        {this.state.check && <FormAnnouncement />}
        {this.state.showButton && <button onClick={this.showForm}> Создать новое рекламное объявление </button>}
        <hr />
        <BargainingOfCustomer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    masBargaining: state.advertiserReducer.masBargaining,
    middleCount: state.advertiserReducer.middleCount,
    activeBargaining: state.advertiserReducer.activeBargaining
  }
}

const mapDispatchToProps = {
  asyncGetDataFromBase,
  changeMiddleCount,
  // changeActiveBargaining
}

export default connect(mapStateToProps, mapDispatchToProps)(CabOrganization);
