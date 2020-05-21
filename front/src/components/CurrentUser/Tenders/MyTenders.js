import React from 'react';
import Tender from './MyTender';

export default function Tenders({ tenders, onClick }) {

  return (
    <>
      <h3>Ваши аукционы:</h3>
      {tenders.map(tender => {
        return <>
          <div key={tender._id}>
            <Tender
              aucId={tender._id}
              title={tender.title}
              market={tender.market}
              finishDate={tender.finishDate}
              minCost={tender.minCost}
              startDate={tender.startDate}
              step={tender.step}
              onClick={onClick}
            />
          </div>
        </>
      })}
    </>
  )
}


