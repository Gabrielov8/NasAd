import React from 'react';
import moment from 'moment-with-locales-es6';
import { Link, withRouter } from 'react-router-dom';
import classes from './MyTender.module.css';
import '../../../css/inputStyle.css'
function Tender({
  title, market, finishDate, minCost, startDate, step, onClick, aucId, creator
}) {
  moment.locale('ru');
  const dateStart = moment(startDate).format('llll');
  const dateFinish = moment(finishDate).format('llll');

  console.log(onClick)
  return (
    <>
      <div className="my-auction">
        <Link
          onClick={onClick}
          to={`/currenttender/${aucId}`}>
          <h3>{title}</h3>
        </Link>
        <p className={classes.paragraph}>Площадка: {market}</p>
        <p className={classes.paragraph}>Торги стартуют: {dateStart}</p>
        <p className={classes.paragraph}>Торги завершатся: {dateFinish}</p>
        <p className={classes.paragraph}>Стартовая цена: {minCost} рублей</p>
        <p className={classes.paragraph}>Шаг торгов: {step} рублей</p>
      </div>
    </>
  );
}

export default withRouter(Tender);
