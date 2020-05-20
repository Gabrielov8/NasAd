import React from 'react';
import Offer from './Offer';


export default function Offers({ offers, onClick }) {

  return (
    <>

      {offers.map(offer => {
        return <div key={offer._id}>

          <Offer
            offer={offer}
            onClick={onClick}
            id={offer._id}
          />
        </div>
      })}
    </>
  )
}
