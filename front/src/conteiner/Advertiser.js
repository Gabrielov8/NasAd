import React from 'react';
import { Link } from 'react-router-dom';


export default class Advertiser extends React.Component {
  render() {
    return (
      <>
        <h1>AdverftiserPage</h1>
        <Link to="/org/1/auction">Создать аукцион</Link>
      </>
    )
  }
}
