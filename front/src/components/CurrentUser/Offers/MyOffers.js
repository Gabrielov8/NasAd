import React from 'react';
import Offer from './MyOffer';


export default function Offers({ offers }) {

  return (
    <>
      {offers.map(offer => {
        return <div key={offer._id}>

          <Offer

          />
        </div>
      })}
    </>
  )
}
