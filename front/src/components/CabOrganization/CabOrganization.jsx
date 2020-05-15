import React, { Component } from 'react';
import style from './CabOrganization.module.css'
import FormAnnouncement from './FormAnnouncement/FormAnnouncement';
import BargainingOfCustomer from './BargainingOfCustomer/BargainingOfCustomer';
import { connect } from 'react-redux'

class CabOrganization extends Component {

  state = {
    check: false,
    showButton: true,
  }

  showForm = () => {
    this.setState({ check: true, showButton: false })
  }

  render() {
    return (
      <div>
        <img className={style.avatar} />
        <h2> Личная страница заказчика </h2>
        <h2> Информация о заказчике: </h2>

        <ul>
          <li> Всего торгов: с базы </li>
          <li> Текущие торги: с базы </li>
          <li> Средний ценник: с базы </li>
        </ul>

        {this.state.check && <FormAnnouncement />}
        {this.state.showButton && <button onClick={this.showForm}> Создать новое рекламное объявление </button>}
        <hr />
        <BargainingOfCustomer />

      </div>
    );
  }
}

// const mapStateToProps = (state) => {

// }

// const mapDispatchToProps = {

// }

export default CabOrganization;
// export default connect(mapStateToProps, mapDispatchToProps)(CabOrganization);
