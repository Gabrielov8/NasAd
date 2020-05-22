import React from 'react';

export default function Bets({ bets }) {


  return (
    <div>
      {bets.map((bet, i) => {
        return (
          <div
            key={i}
          >
            <p>Cтавка: {bet.cost} рублей</p>
            <p>Ставку сделал :{bet.authtor.login}</p>
          </div>
        )
      })}
    </div>
  )
}
