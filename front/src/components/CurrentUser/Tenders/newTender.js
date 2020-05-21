import React from 'react';
import Button from '../../generalComponents/button';
// // import classes from './newTender.module.css';

export default function NewTender({ onSubmit }) {
  return (
    <>
      <h3>Создать новый аукцион:</h3>
      {/* <form
        className={classes["form-style-9"]}
        onSubmit={onSubmit}
      >
        <ul>
          <li>
            <input
              type="text"
              required={true}
              placeholder="Введите название аукциона"
              name="title"
              className={classes["field-style field-split align-left"]}
            />
            <input
              type="text"
              required={true}
              placeholder="Введите площадку"
              name="market"
              className={classes["field-style field-split align-right"]}
            />
          </li>
          <li>
            <input
              type="text"
              required={true}
              placeholder="Минимальная оплата"
              name="minCost"
              className={classes["field-style field-split align-left"]}
            />
            <input
              type="text"
              required={true}
              placeholder="Шаг"
              name="step"
              className={classes["field-style field-split align-right"]}
            />
          </li>
          <li>
            <input
              type="datetime-local"
              required={true}
              name="startDate"
              className={classes["field-style field-split align-left"]}
            />
            <input
              type="datetime-local"
              required={true}
              name="finishDate"
              className={classes["field-style field-split align-right"]}
            />
          </li>
          <li>
            <Button
              type="submit"
              text="Создать"
            />
          </li>
        </ul>
      </form>
      <div>
      </div> */}
    </>
  )
}
