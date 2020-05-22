import { connect } from 'react-redux'
import React, { Component } from 'react'
import { myauctionfetch, selectbloger } from '../../../redux/actions'

class Myauction extends Component {
  state = {
    win: false,
    blogwin: []
  }

  onClick = () => {
    console.log(this.props.stateuser.id);

    this.props.myauctionfetch(this.props.stateuser.id)
  }

  select = (userid, auctionid, username) => {

    this.props.selectbloger(userid, auctionid)
    const blogwin = [...this.state.blogwin]
    blogwin.push(username)
    this.setState({
      win: true,
      blogwin: blogwin
    })
  }

  render() {
    return (
      <div className="my-auction-content">
        <button className='btn1' onClick={this.onClick} > Просмотреть блогеров,которые откликнулись на ваше аукционы </button>
        {this.state.win ? <div> Мы оповестим: {this.state.blogwin.map((user) => {
          return (<d>{user}, </d>)
        })} о вашем решении! </div> : null}
        <h3>Ваши аукционы</h3>
       {this.props.state.myauction ? <div>{this.props.state.myauction && this.props.state.myauction.map((auction) => {
          return (
            <div>
              {auction.blogerin.length > 0 ?
                <ul>
                  <li>
                    Тема аукциона: {auction.subject}
                  </li>
                  <li>
                    Минимальное количество подписчиков: {auction.subscribers}
                  </li>
                  <li>
                    Заданный бюджет: {auction.budget}
                  </li>
                  {/* </ul> */}

                  {auction.blogerin.map((blog) => {
                    return (
                      //  <ul>
                      <li>
                        Oткликнулся: {blog.userlogin} <button className="btn2" onClick={this.select.bind(this, blog.userid, auction._id, blog.userlogin)}  >Выбрать </button>
                      </li>
                    )
                  })}
                </ul>
                : null}

            </div>
          )
        })} </div> : null}
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
    myauctionfetch: (userid) => dispatch(myauctionfetch(userid)),
    selectbloger: (userid, auctionid) => dispatch(selectbloger(userid, auctionid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Myauction)
