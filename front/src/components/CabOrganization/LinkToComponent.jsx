import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LinkToComponent extends Component {
  render() {
    return (
      <div>
        <NavLink style={{ textDecoration: 'none' }} to={`/${this.props.path}/${localStorage.getItem('id')}`}
        > <h3>{this.props.name} {this.props.value} </h3>
        </NavLink><hr />
      </div>
    );
  }
}

export default LinkToComponent;
