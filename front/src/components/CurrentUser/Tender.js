import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Auction({
  title, market, finishDate, minCost, startDate, step, match, aucId
}) {

  return (
    <>
      <Link
        to={`currentauction/${match.params.id}/${aucId}`}
      >
        <h4>{title}</h4>
      </Link>
      <p>Площадка: {market}</p>
      <p>Торги стартуют: {startDate}</p>
      <p>Торги завершатся: {finishDate}</p>
      <p>Стартовая цена: {minCost}</p>
      <p>Стартовая цена: {step}</p>
    </>
  )
}


export default withRouter(Auction);
