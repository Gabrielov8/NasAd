import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { findWinInAuction } from "../../../redux/advertiser/FetchData/fetchSendToBase";
import { connect } from "react-redux";
import { addWinAuctions } from "../../../redux/advertiser/actions";


class OrgLk extends Component {
  componentDidMount = () => {
    this.props.findWinInAuction();
    this.time = setInterval(() => {
      this.props.findWinInAuction();
    }, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/">Домашняя страница</NavLink>
          </li>
          <li>
            <NavLink to="/createauction">Создать аукцион</NavLink>
          </li>
          <li>
            <NavLink to="/myauction">Мои аукционы</NavLink>
          </li>


          <li>
            <NavLink to="/parcer">Парсер</NavLink>
          </li>
          <li>
            <NavLink to="/searchAuction">Поиск аукционов</NavLink>
          </li>
          <li>
            <NavLink to="/searchTender">Поиск тендеров</NavLink>
          </li>
          <li>
            <div>
              <NavLink to="/winTender">
                Оповещения &nbsp;
                <b style={{ color: "red", fontSize: 17 }}>
                  {this.props.winAuctions.length == 0
                    ? 0
                    : this.props.winAuctions.length}
                </b>
              </NavLink>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    winAuctions: state.advertiserReducer.winAuctions,
  };
};

const mapDispatchToProps = {
  findWinInAuction,
  addWinAuctions,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrgLk);
