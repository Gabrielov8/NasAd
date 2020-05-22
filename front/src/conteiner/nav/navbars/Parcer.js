
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
        <h2>Вставьте ссылку на группу ВК и я вам покажу ее статистику</h2>
        <from className='form-parser'>
          <input className="input-parser" type='text' onChange={this.onChange} />
          <input className='btn-parser' type='submit' onClick={this.onClick.bind(this,this.state.inputvalue)} />

        </from>
        {this.props.state.usersocial ? <div> {this.props.state.usersocial && this.props.state.usersocial.map((social) => {
          return (
            <div> 

            <h2>Результаты анализа:</h2>
            <ul>
              <li>
                Среднее кол-во лайков на публикации <b>{social.middlelike}</b>
              </li>
              <li>
              Среднее кол-во просмотров на публикации <b> {social.middleview}</b>
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
