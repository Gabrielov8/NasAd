import React, { Component } from 'react';
import Tenders from '../../CurrentUser/Tenders/MyTenders';
import { getFromBaseOfTender } from '../../../redux/advertiser/FetchData/fetchSendToBase'
import { connect } from 'react-redux';

class ListAuction extends Component {

  componentDidMount() {
    this.props.getFromBaseOfTender()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.tenders && <Tenders tenders={this.props.tenders} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tenders: state.advertiserReducer.tenders
  }
}

const mapDispatchToProps = {
  getFromBaseOfTender,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAuction);


// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import Tenders from '../../CurrentUser/Tenders/MyTenders';
// import { getFromBaseOfTender } from '../../../redux/advertiser/FetchData/fetchSendToBase'
// import { connect } from 'react-redux';

// class ListAuction extends Component {

//   state = {
//     check: false
//   }

//   componentDidMount() {
//     this.props.getFromBaseOfTender()
//     // this.props.getCurrentUser(this.props.match.params.id);
//   }

//   onClickChangeCheck = (event) => {
//     event.preventDefault()
//     this.setState({
//       ...this.state, check: true
//     })
//   }

//   render() {
//     return (
//       <div>
//         <NavLink style={{ textDecoration: 'none' }} to={`/homepage/${localStorage.getItem('id')}`}
//           onClick={this.onClickChangeCheck}
//         >
//           Список новых тендеров
//         </NavLink>
//         {this.state.check && <Tenders tenders={this.props.tenders} />}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     tenders: state.advertiserReducer.tenders
//   }
// }

// const mapDispatchToProps = {
//   getFromBaseOfTender,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListAuction);
