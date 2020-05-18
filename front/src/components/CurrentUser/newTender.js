import React from 'react';
import Button from '../generalComponents/button';

export default function NewAuction({ onSubmit }) {
  return (
    <>
      <div>
        <h3>Создать новый аукцион:</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            required={true}
            defaultValue="Введите название аукциона"
            name="title"
          />
          <input
            type="text"
            required={true}
            defaultValue="Введите площадку"
            name="market"
          />
          <input
            type="text"
            required={true}
            defaultValue="Минимальная оплата"
            name="minCost"
          />
          <input
            type="text"
            required={true}
            defaultValue="Шаг"
            name="step"
          />
          <input
            type="datetime-local"
            required={true}
            name="startDate"
          />
          <input
            type="datetime-local"
            required={true}
            name="finishDate"
          />
          <Button
            type="submit"
            text="Создать"
          >
          </Button>
        </form>
      </div>
    </>
  )
}
