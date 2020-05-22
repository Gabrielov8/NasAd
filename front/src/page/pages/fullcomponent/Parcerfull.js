import React, { Component } from 'react'
import moment from 'moment-with-locales-es6';
import Parcer from '../../../conteiner/nav/navbars/Parcer'
import LogoutBlock from '../../../components/BloggerLk/LogoutBlock'
import Menu from '../../../components/BloggerLk/Menu'
import MainPage from '../../../components/BloggerLk/MainPage'

export default class Parcerfull extends Component {
  render() {
    return (
     
      <>
      <div className="main-page" >
        <div className="dashboard-info">
          <h3>Dashboard</h3>
      
          <p>{moment().format('dddd')}   {moment().format('MMMM Do YYYY')}</p>
        </div>
        </div>

        <div className="welcome">
          <div className="text">
            {/* <h3>Welcome back {this.props.user.user.login}</h3> */}
            <p>Рекламодатели уже заждались тебя маленький негодник!</p>
          </div>
          <img src="/imgBloggerLk/vhod.svg" alt="" />
        </div>
        <div className="info-block">
            <div className="first">
              {/* <Parcer></Parcer> */}
            </div>
            </div>
            <LogoutBlock></LogoutBlock>
            </>
              
        
        
       
    )
  }
}
