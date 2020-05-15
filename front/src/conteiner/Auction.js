import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createauction} from '../redux/actions'



 class Auction extends Component {

   
  //  state = {
  //    auction:'1'
  //  }

  onClick = (event) => {
    const auction = [...this.state.auction]
    auction.push(event.target.value)


    this.setState({
      auction
    })
    
    console.log(this.state.auction);
  
}

onClickBut = (event) =>{
  this.props.createauction(event.target.value)

      }

      
  render() {
    return (
      <div>

        <h2>Заполните все поля и нажмите кнопку создать аукцион</h2>

        <form name='ff'>
          <div>Какая у вас тематика объявления?  </div>
          <input type="checkbox" name='one' value='Приложения для смартфонов' onChange={this.onClick}  />
          <label >Приложения для смартфонов</label>
          <div >
            <input type="checkbox" name='2' value='Личный блог'onChange={this.onClick}  />
            <label>Личный блог</label>
          </div>
          <div >
            <input type="checkbox" name='3'onChange={this.onClick} value='Букмекерская контора' />
            <label>Букмекерская контора</label>
          </div>t
          <div >
            <input type="checkbox" name='4' value='Творчество' onChange={this.onClick}  />
            <label >Творчество</label>
          </div>
          <p>Какое минимальное кол-во подписчиков должны быть у блоггера?
           <br></br>
            <input type='number' name='five' />
          </p>
          <div>Какой у вас бюджет? </div>
          <input type='number' name='6'/>
          <p>
            <input type='text' onChange={this.onClickBut}  ></input>
            <button onClick={this.onClickBut} >Cоздать аукцион</button>
          </p>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.auctionReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createauction: (auction) => dispatch(createauction(auction))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Auction)
