import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createauction, allauction } from '../redux/actions'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Allauction from './nav/navbars/Allauction'
// import {loadedAuction} from '../redux/actions'



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

        <div>
          <h2>Заполните все поля и нажмите кнопку создать аукцион</h2>

          <form name='ff'>
            <div>Какая у вас тематика объявления?  </div>
            <input type="checkbox" name='subject' value='Приложения для смартфонов' onChange={this.onClick} />
            <label >Приложения для смартфонов</label>
            <div >
              <input type="checkbox" name='subject' value='Личный блог' onChange={this.onClick} />
              <label>Личный блог</label>
            </div>
            <div >
              <input type="checkbox" name='subject' onChange={this.onClick} value='Букмекерская контора' />
              <label>Букмекерская контора</label>
            </div>
          <div >
              <input type="checkbox" name='subject' value='Личный бренд' onChange={this.onClick} />
              <label >Личный бренд</label>
            </div>
            <p>Какое минимальное кол-во подписчиков должны быть у блоггера?
           <br></br>
              <input type='number' name='subscribers' onChange={this.onClick} />
            </p>
            <div>Какой у вас бюджет? </div>
            <input type='number' name='budget' onChange={this.onClick} />

          </form>
          <button onClick={this.onClickBut}>Cоздать аукцион</button>
          {this.props.state.loaded ? <div>Аукцион создан!</div> : null}

          {/* <p>
            <NavLink onClk={this.onClickAllAuction} to="/allauction">allauction</NavLink>
            <Route exact path="/allauction" component={Allauction} />
          </p> */}

          {/* <button onClick={this.onClickAllAuction} >Allauction</button> */}
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
