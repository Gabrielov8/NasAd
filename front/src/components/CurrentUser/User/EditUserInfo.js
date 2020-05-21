import React from 'react';
import Button from '../../generalComponents/button';

export default function UserInfo({ onSubmit }) {
  return (
    <>
      <div>
        <h3>Информация о пользователе:</h3>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Обновите информацию"
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
