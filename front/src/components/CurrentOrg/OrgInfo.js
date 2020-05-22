import React from 'react';

export default function OrgInfo({ description }) {

  return (
    <>

      <div>
        {description
          ?
          <p>{description}</p>
          :
          <p>Расскажите о том, что хотите рекламировать</p>}
      </div>

    </>
  )
} 
