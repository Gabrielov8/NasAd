import React, { Component } from 'react';
import style from './CabOrganization.module.css'
import FormAnnouncement from './FormAnnouncement/FormAnnouncement';
import BargainingOfCustomer from './BargainingOfCustomer/BargainingOfCustomer';
import { connect } from 'react-redux'
import { asyncGetData } from '../../redux/advertiser/actions'

class CabOrganization extends Component {

  state = {
    check: false,
    showButton: true,
  }

  componentDidMount = () => {
    this.props.asyncGetData()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.middleCount !== prevState.middleCount) {
  //     this.setState({
  //       middleCount: this.props.masBargaining
  //     })
  //   }
  // }

  showForm = () => {
    this.setState({ check: true, showButton: false })
  }

  render() {
    console.log(this.props.middleCount);
    
    return (
      <div>
        <img className={style.avatar} />
        <h2> Личная страница заказчика </h2>
        <h2> Информация о заказчике: </h2>
        <ul>
          <li> Всего торгов: {this.props.allBargaining} </li>
          <li> Текущие торги: {this.props.allBargaining}  </li>
          <li> Средний ценник: {this.props.middleCount}  </li>
        </ul>

        {this.state.check && <FormAnnouncement />}
        {this.state.showButton && <button onClick={this.showForm}> Создать новое рекламное объявление </button>}
        <hr />
        <BargainingOfCustomer />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    middleCount: state.advertiserReducer.middleCount,
    allBargaining: state.advertiserReducer.allBargaining,
    masBargaining: state.advertiserReducer.masBargaining,
  }
}

const mapDispatchToProps = {
  asyncGetData,
}

// export default CabOrganization;
export default connect(mapStateToProps, mapDispatchToProps)(CabOrganization);
