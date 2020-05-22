import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncGetDataFromBase, sendIdOfBargainingToBase } from '../../../../redux/advertiser/FetchData/fetchSendToBase'
import style from './ArrayBargaining.module.css' 
import { changeActiveBargaining } from '../../../../redux/advertiser/actions'

class BargainingOfCustomer extends Component {

  state = {
    check: false,
    showButton: true,
  }

  componentDidUpdate = (PrevProps) => {
    if (this.props.masBargaining.length !== PrevProps.masBargaining.length) {
      this.props.asyncGetDataFromBase(localStorage.getItem('id'))
      this.props.changeActiveBargaining()
    }
  }

  showArrayBargaining = () => {
    this.setState({ check: true, showButton: false })
  }

  closeArrayBargaining = () => {
    this.setState({ check: false, showButton: true })
  }

  changeActive = (id) => {
    this.props.sendIdOfBargainingToBase(id)
    this.props.asyncGetDataFromBase(localStorage.getItem('id'))
    this.props.changeActiveBargaining()
  }

  render() {
    return (
      <div>
        {this.state.showButton && <button onClick={this.showArrayBargaining}>{this.props.nameButton}</button>}
        <br />
        <div> {this.state.check &&
          this.props.masBargaining.map(m => {
            if (m.active === this.props.activeBar) {
              return <div>
                <b>Тема:</b> {m.subject}
                <b>Блогер:</b> {m.nameBlogger}
                <b>Сумма:</b> {m.cash}
                {this.props.activeBar && <button className={style.itemButton} onClick={() => this.changeActive(m._id)}> исполнена</button>}
              </div>
            }
            return ''
          })}
        </div>
        {this.state.check && <button onClick={this.closeArrayBargaining} > Закрыть </button>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    masBargaining: state.advertiserReducer.masBargaining,
    checkButton: state.advertiserReducer.checkButton
  }
}

const mapDispatchToProps = {
  asyncGetDataFromBase,
  sendIdOfBargainingToBase,
  changeActiveBargaining
}

export default connect(mapStateToProps, mapDispatchToProps)(BargainingOfCustomer);
