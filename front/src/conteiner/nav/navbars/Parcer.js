
import {connect} from 'react-redux'
import React, { Component } from 'react'
import {parcer} from '../../../redux/actions'

 class Parcer extends Component {

  state = {
    inputvalue: ''
  }

  onChange = (event) => {
    this.setState ({
      inputvalue: event.target.value
    })
  }

  onClick = (value) => {
    this.props.parcer(this.props.stateuser.id, value)
  }

  render() {
    return (
      <div>
        <h1>Привет, я парсер ;)</h1>
        <from>
          <input type='text' onChange={this.onChange} />
          <input type='submit' onClick={this.onClick.bind(this,this.state.inputvalue)} />

        </from>
        {this.props.state.usersocial ? <div> {this.props.state.usersocial && this.props.state.usersocial.map((social) => {
          return (
            <div> 

            <h2>Ваши социальные сети:</h2>
            <ul>
              <li>
                Среднее кол-во лайков {social.middlelike}
              </li>
              <li>
              Среднее кол-во просмотров {social.middleview}
              </li>
              <li>
                <a href={social.url}>{social.url}</a> 
              </li>
            </ul>
            </div>
          )
        } )} </div> : null}
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
    parcer: (userid,inst) => dispatch(parcer(userid,inst)),
    
  }
}


export default connect (mapStateToProps,mapDispatchToProps)(Parcer)
