import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function MyOffer({ auction }) {

  return (
    <>
      <h2>{auction.subject}</h2>
      <p>Минимальное количество подписчиков: {auction.subscribers}</p>
      <p>Бюджет рекламной кампании: {auction.budget}</p>
    </>
  )
}


export default withRouter(MyOffer);
