import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createauction, allauction } from '../redux/actions'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Allauction from './nav/navbars/Allauction'




class Auction extends Component {


  state = {
    subject: '',
    subscribers: '',
    budget: '',
    usercreate: '',
  }

  onClick = (event) => {


    this.setState({
      [event.target.name]: event.target.value,
      usercreate: this.props.stateuser.id
    })

    console.log(this.state);

  }

  onClickBut = () => {

    this.props.createauction(this.state)

  }
  onClickAllAuction = () => {
    this.props.allauction()
  }


  render() {
    return (
      <Router>

        <div className="make-auction">
          <h2>Заполните все поля и нажмите кнопку создать аукцион</h2>

          <form className="form-make-auction" name='ff'>
            <div>Какая у вас тематика объявления?</div>
            <div>
              <div className='checkbox-auction'>
                <input type="checkbox" name='subject' value='Приложения для смартфонов' onChange={this.onClick} />
                <label >Приложения для смартфонов</label>
              </div>
              <div className='checkbox-auction'>
                <input type="checkbox" name='subject' value='Личный блог' onChange={this.onClick} />
                <label>Личный блог</label>
              </div>
              <div className='checkbox-auction'>
                <input type="checkbox" name='subject' onChange={this.onClick} value='Букмекерская контора' />
                <label>Букмекерская контора</label>
              </div>
              <div className='checkbox-auction'>
                <input type="checkbox" name='subject' value='Личный бренд' onChange={this.onClick} />
                <label >Личный бренд</label>
              </div>
            </div>
            <div className="auction-budjet">
              <p>Какое минимальное кол-во подписчиков должны быть у блоггера?</p>

              <input type='number' name='subscribers' onChange={this.onClick} />

              <div>Какой у вас бюджет? </div>
              <input type='number' name='budget' onChange={this.onClick} />
            </div>
          </form>
          <button onClick={this.onClickBut}>Cоздать аукцион</button>
          {this.props.state.loaded ? <div>Аукцион создан!</div> : null}
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.auctionReducer,
    stateuser: state.authReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createauction: (newauction) => dispatch(createauction(newauction)),
    allauction: () => dispatch(allauction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auction)
