import React, { Component } from 'react'
import {connect} from 'react-redux'
import { useraddauction,allauction} from '../../../redux/actions'

 class Allauction extends Component {
state = {
  all : this.props.state.allauction
}

componentDidMount = () => {
this.props.allauction()
}

onClick= () => {
  console.log(this.props.state.allauction, 'HHH');
  
}

onChage = (auctionid) => {
  const userid= this.props.stateuser.id
  this.props.useraddauction(userid,auctionid)
  
}

  render() {
    return (
      <div>
        <button onClick={this.onClick} >State</button>
        <ul>

        { this.props.state.allauction && this.props.state.allauction.map((auction)=>{
          return (
            <li>
              {auction.subject}
              {auction.budget}
              {auction._id}
              <button onClick={this.onChage.bind(this, auction._id )} >Откликнуться на предложение</button>
            </li>
          )
        })}
        </ul>
      
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
    useraddauction: (userid,auctionid) => dispatch(useraddauction(userid,auctionid)),
    allauction: () => dispatch(allauction())
  }
}


export default connect (mapStateToProps,mapDispatchToProps)(Allauction)

