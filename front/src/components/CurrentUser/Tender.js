import React from "react";
import { Link, withRouter } from "react-router-dom";
import moment from 'moment-with-locales-es6'

function Auction({
  title,
  market,
  finishDate,
  minCost,
  startDate,
  step,
  match,
  aucId, 
}) {
  moment.locale("ru");
  const dateStart = moment(startDate).format("llll");
  const dateFinish = moment(finishDate).format("llll");

console.log(match ," 111");

   
  return (
    <>
      <Link to={`/currenttender/${aucId}`}>
        <h4>{title}</h4>
      </Link>
      <p>Площадка: {market}</p>
      <p>Торги стартуют: {dateStart}</p>
      <p>Торги завершатся: {dateFinish}</p>
      <p>Стартовая цена: {minCost}</p>
      <p>Стартовая цена: {step}</p>
    </>
  );
}

export default withRouter(Auction);
