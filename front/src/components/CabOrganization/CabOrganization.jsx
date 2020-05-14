import React, { Component } from 'react';
import style from './CabOrganization.module.css'
import FormAnnouncement from './FormAnnouncement/FormAnnouncement';

class CabOrganization extends Component {

  state = {
    check: false
  }

  showForm = () => {
    this.setState({ check: true })
  }

  render() {
    return (
      <div>
        <img className={style.avatar} />
        <h2> Личная страница заказчика </h2>
        <h2> Информация о заказчике </h2>

        <ul>
          <li> Всего торгов: 0 </li>
          <li> Текущие торги: 0 </li>
          <li> Средний ценник: 0 </li>
        </ul>

        {check && <FormAnnouncement />}

        <button onClick={this.showForm}> Создать новое рекламное объявление </button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CabOrganization);
