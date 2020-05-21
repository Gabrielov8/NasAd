import React from 'react';
import Button from '../generalComponents/button';

export default function OrgInfo({ onSubmit }) {
  return (
    <>
      <div>
        <h3>Расскажите о том, что хотите рекламировать!</h3>
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
