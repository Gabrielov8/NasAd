import React, { Component } from 'react';
import ArrayBargaining from './ArrayBargaining/ArrayBargaining';

class BargainingOfCustomer extends Component {
  render() {
    return (
      <div>
        <h1> Торги заказчика: </h1>
        <div> Дата и время окончания торгов: </div>
        <br />
        <ArrayBargaining activeBar={true} nameButton='Показать активные заявки' />
        <br />
        <ArrayBargaining activeBar={false} nameButton='Показать неактивные заявки' />
      </div>
    );
  }
}

export default BargainingOfCustomer
