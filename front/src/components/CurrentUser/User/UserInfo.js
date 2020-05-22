import React from 'react';

export default function UserInfo({ description }) {
  
  return (
    <>

      <div>
        {description
          ?
          <p>{description}</p>
          :
          <p>Расскажите о себе</p>}
      </div>

    </>
  )
} 
