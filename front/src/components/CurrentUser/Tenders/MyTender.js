import React from 'react';
import moment from 'moment-with-locales-es6';
import { Link, withRouter } from 'react-router-dom';
import classes from './MyTender.module.css';
function Tender({
  title, market, finishDate, minCost, startDate, step, match, aucId
}) {
  moment.locale('ru');
  const dateStart = moment(startDate).format('llll');
  const dateFinish = moment(finishDate).format('llll');

  return (

    <div className={classes["tender-container"]}>
      <div className={classes["row"]}>
        <div className={classes["column"]}>
          <div className={classes["card"]}>
            <div className={classes["card-content"]}>
              <Link to={`/currenttender/${localStorage.getItem('id')}/${aucId}`}>
                <h4>{title}</h4>
              </Link>
              <p className={classes.paragraph}>Площадка: {market}</p>
              <p className={classes.paragraph}>Торги стартуют: {dateStart}</p>
              <p className={classes.paragraph}>Торги завершатся: {dateFinish}</p>
              <p className={classes.paragraph}>Стартовая цена: {minCost} рублей</p>
              <p className={classes.paragraph}>Шаг торгов: {step} рублей</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default withRouter(Tender);
