import React from 'react';

export default function Bets({ bets }) {
console.log(bets);

  return (
    <div>
      {bets.map((bet, i) => {
        return (
          <div
            key={i}
          >
            <p>Cтавка: {bet.cost}</p>
            <p>Автор: {bet.author}</p>
          </div>
        )
      })}
    </div>
  )
}
