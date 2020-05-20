import React from 'react';
import Button from '../../generalComponents/button';

export default function Offer({ offer, onClick, id }) {

  return (
    <>
      <h2>{offer.subject}</h2>
      <p>Минимальное количество подписчиков: {offer.subscribers}</p>
      <p>Бюджет рекламной кампании: {offer.budget}</p>
      <Button
        text="Подать предложение"
        onClick={onClick}
        id={id}
      />
    </>
  )
}
