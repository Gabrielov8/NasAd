import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Allauction extends Component {
state = {
  all : this.props.state.allauction
}

onClick= () => {
  console.log(this.props.state.allauction, 'HHH');
  
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
            </li>
          )
        })}
        </ul>
        aaa
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

export default connect (mapStateToProps,null)(Allauction)

