import React from 'react';
import Button from '../generalComponents/button';

export default function Bet({ onSubmit }) {

  return (
    <form
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="bet"
        placeholder="Ваша ставка"
      />
      <Button
        type="submit"
        text="Ставка"
      />
    </form>
  )
}
