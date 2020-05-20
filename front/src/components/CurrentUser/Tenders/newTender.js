import React from 'react';
import Button from '../../generalComponents/button';

export default function NewTender({ onSubmit }) {
  return (
    <>
      <div>
        <h3>Создать новый аукцион:</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            required={true}
            placeholder="Введите название аукциона"
            name="title"
          />
          <input
            type="text"
            required={true}
            placeholder="Введите площадку"
            name="market"
          />
          <input
            type="text"
            required={true}
            placeholder="Минимальная оплата"
            name="minCost"
          />
          <input
            type="text"
            required={true}
            placeholder="Шаг"
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
