import React, { Component } from 'react';

class BargainingOfCustomer extends Component {

  state = {
    arr: [
      { name: 555 },
      { name: 'zfbsdb' },
      { name: '5sdbsdbsb55' },
    ],
    check: false,
    showButton: true,
  }



  showArrayBargaining = () => {
    this.setState({ check: true, showButton: false })
  }

  closeArrayBargaining = () => {
    this.setState({ check: false, showButton: true })
  }

  render() {

    let mas = this.state.arr.map(n => <div> {n.name} </div>)

    return (
      <div>
        <h1> Торги заказчика: </h1>
        <div> Дата и время окончания торгов </div>

        <div> {this.state.check && mas} </div>

        {this.state.showButton && <button onClick={this.showArrayBargaining}> Посмотреть все предложения</button>}
        {this.state.check && <button onClick={this.closeArrayBargaining} > Закрыть </button>}
      </div>
    );
  }
}


export default BargainingOfCustomer;

