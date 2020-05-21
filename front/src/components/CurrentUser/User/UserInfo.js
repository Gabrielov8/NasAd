import React from 'react';

import { Link } from 'react-router-dom';

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
