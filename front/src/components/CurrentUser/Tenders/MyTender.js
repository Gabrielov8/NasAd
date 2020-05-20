import React from 'react';
import moment from 'moment-with-locales-es6';
import { Link, withRouter } from 'react-router-dom';

function Tender({
  title, market, finishDate, minCost, startDate, step, match, aucId
}) {
  moment.locale('ru');
  const dateStart = moment(startDate).format('llll');
  const dateFinish = moment(finishDate).format('llll');

  return (
    <>
      <Link to={`/currenttender/${localStorage.getItem('id')}/${aucId}`}>
        <h4>{title}</h4>
      </Link>
      <p>Площадка: {market}</p>
      <p>Торги стартуют: {dateStart}</p>
      <p>Торги завершатся: {dateFinish}</p>
      <p>Стартовая цена: {minCost} рублей</p>
      <p>Шаг торгов: {step} рублей</p>
    </>
  );
}

export default withRouter(Tender);
