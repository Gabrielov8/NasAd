import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createauction} from '../redux/actions'
// import {loadedAuction} from '../redux/actions'



 class Auction extends Component {

   
   state = {
    subject:'',
    subscribers:'',
    budget:'',
    usercreate: ''
   }

  onClick = (event) => {
    
   
    this.setState({
    [event.target.name]: event.target.value,
    usercreate: this.props.stateuser.id
    })
    
    console.log(this.state);
  
}

onClickBut = () =>{
  
  this.props.createauction(this.state)

      }

      
  render() {
    return (
      <div>

        <h2>Заполните все поля и нажмите кнопку создать аукцион</h2>

        <form name='ff'>
          <div>Какая у вас тематика объявления?  </div>
          <input type="checkbox" name='subject' value='Приложения для смартфонов' onChange={this.onClick}  />
          <label >Приложения для смартфонов</label>
          <div >
            <input type="checkbox" name='subject' value='Личный блог'onChange={this.onClick}  />
            <label>Личный блог</label>
          </div>
          <div >
            <input type="checkbox" name='subject'onChange={this.onClick} value='Букмекерская контора' />
            <label>Букмекерская контора</label>
          </div>t
          <div >
            <input type="checkbox" name='subject' value='Творчество' onChange={this.onClick}  />
            <label >Творчество</label>
          </div>
          <p>Какое минимальное кол-во подписчиков должны быть у блоггера?
           <br></br>
            <input type='number' name='subscribers' onChange={this.onClick}/>
          </p>
          <div>Какой у вас бюджет? </div>
          <input type='number' name='budget' onChange={this.onClick}/>
         
        </form>
            <button onClick={this.onClickBut}>Cоздать аукцион</button>
            {this.props.state.loaded ? <div> OK</div>: null}

      </div>
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
    createauction: (newauction) => dispatch(createauction(newauction))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Auction)
