// import React, { Component } from 'react';
// import style from './CabOrganization.module.css'
// import FormAnnouncement from './FormAnnouncement/FormAnnouncement';
// import BargainingOfCustomer from './BargainingOfCustomer/BargainingOfCustomer';
// import { connect } from 'react-redux'
// import { asyncGetDataFromBase, findWinInAuction } from '../../redux/advertiser/FetchData/fetchSendToBase'
// import { changeMiddleCount, changeActiveBargaining, changeCheck } from '../../redux/advertiser/actions'
// import LinkToComponent from './LinkToComponent';

// class CabOrganization extends Component {

//   state = {
//     check: false,
//     showButton: true,
//   }

//   componentDidMount = () => {
//     this.props.asyncGetDataFromBase(localStorage.getItem('id'))
//     this.props.findWinInAuction()
//   }

//   componentDidUpdate = (PrevProps) => {
//     if (this.props.masBargaining.length !== PrevProps.masBargaining.length) {
//       this.props.changeMiddleCount()
//       this.props.changeActiveBargaining()
//     }
//   }

//   showForm = () => {
//     this.setState({ check: true, showButton: false })
//   }

//   // qwerty = (event) => {
//   //   event.preventDefault()
//   //   this.props.changeCheck(true)
//   // }

//   render() {
//     return (
//       <div>

//         {/* <a href='' onClick={this.qwerty}> Поиск по аукционам </a> */}

//         {/* <img alt='' className={style.avatar} /> */}

//         <div className={style.search}>
//           <LinkToComponent name="Поиск по аукционам" path='search' />
//           <LinkToComponent name="Поиск по тендерам" path='SearchTender' />

//           {this.props.winAuctions.length == 0 ? <h3>Оповещения: нет новых <hr /> </h3>:
//             <LinkToComponent name="Оповещения: новых " path='winAuction' value={this.props.winAuctions.length} />
//           }

//           <LinkToComponent name="Список новых тендеров" path='ListAuction' />
//           {/* <LinkToComponent name="Список новых тендеров" path='Tenders' /> */}

//           <LinkToComponent name="Список новых аукционов" path='SearchAllAuction' />

//         </div>

//         {/* <h2> Личная страница заказчика </h2>
//         <h2> Информация о заказчике: </h2>
//         <ul>
//           <li> Всего торгов: {this.props.masBargaining.length}</li>
//           <li> Текущие торги: {this.props.masBargaining ? this.props.activeBargaining : 0} </li>
//           <li> Средний ценник:  {this.props.middleCount === 'NaN' ? 0 : this.props.middleCount}</li>
//         </ul> */}
// {/* 
//         {this.state.check && <FormAnnouncement />}
//         {this.state.showButton && <button onClick={this.showForm}> Создать новое рекламное объявление </button>} */}
//         {/* <hr /> */}
//         {/* <BargainingOfCustomer /> */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     masBargaining: state.advertiserReducer.masBargaining,
//     middleCount: state.advertiserReducer.middleCount,
//     activeBargaining: state.advertiserReducer.activeBargaining,
//     winAuctions: state.advertiserReducer.winAuctions,
//     // changeCheck: state.advertiserReducer.changeCheck,
    
//   }
// }

// const mapDispatchToProps = {
//   asyncGetDataFromBase,
//   changeMiddleCount,
//   changeActiveBargaining,
//   findWinInAuction,
//   // changeCheck
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CabOrganization);
