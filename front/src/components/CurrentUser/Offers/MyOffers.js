import React from 'react';
import MyOffer from './MyOffer';

export default function MyOffers({ auctions }) {
  return (
    <>
      {auctions.map(auction => {
        return <div className='my-offer' key={auction._id +1}>
          <MyOffer
            auction={auction}
          />
        </div>
      })}
    </>
  )
}
