import React from 'react';
import Button from '../../generalComponents/button';

export default function UserInfo({ onSubmit }) {
  return (
    <>
      <div>
        <h3>Информация о пользователе:</h3>
        <form onSubmit={onSubmit}>
          <input
            defaultValue="Обновите информацию"
            name="text"
          />
          <Button
            type="submit"
            text="Обновить информацию"
          />
        </form>
      </div>
    </>
  )
}
