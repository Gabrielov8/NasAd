import React from 'react';

export default function CashBalance({ money }) {
  return (
    <>
      <div>
        <h3> У вас на счету:</h3>
        <p>{money} рублей</p>
      </div>
    </>
  )
}
