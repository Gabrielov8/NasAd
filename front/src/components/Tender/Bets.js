import React from 'react';
import '../../css/orglk.css'
export default function Bets({ bets }) {


  return (
    <div>
      {bets.map((bet, i) => {
        return (
          <div className="stavka"
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
