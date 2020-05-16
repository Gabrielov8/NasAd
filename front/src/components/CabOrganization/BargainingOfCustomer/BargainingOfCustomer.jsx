import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncGetData } from '../../../redux/advertiser/actions'

class BargainingOfCustomer extends Component {

  state = {
    check: false,
    showButton: true,
  }

  componentDidMount = () => {
    this.props.asyncGetData()
  }


  // componentDidUpdate() {
  // if (this.props.todos.todos.length !== prevProps.todos.todos.length) {
  //    this.props.getTodos(); 
  //   } 
  // }

  showArrayBargaining = () => {
    this.setState({ check: true, showButton: false })
  }

  closeArrayBargaining = () => {
    this.setState({ check: false, showButton: true })
  }

  render() {
    // let { creator } = this.props.masBargaining
    // console.log(this.props.masBargaining);
    // console.log(creator);

    // let mas = this.props.masBargaining.map(n => <div> {n} </div>)

    return (
      <div>
        <h1> Торги заказчика: </h1>
        <div> Дата и время окончания торгов </div>

        {/* <div> {this.state.check && mas} </div> */}

        {this.state.showButton && <button onClick={this.showArrayBargaining}> Посмотреть все предложения</button>}
        {this.state.check && <button onClick={this.closeArrayBargaining} > Закрыть </button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    masBargaining: state.advertiserReducer.masBargaining,
  }
}

const mapDispatchToProps = {
  asyncGetData,
}

export default connect(mapStateToProps, mapDispatchToProps)(BargainingOfCustomer);

