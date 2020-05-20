import React from 'react';

export default function UserInfo({ description, name }) {

  return (
    <>
      <div>
        <h3>Привет, {name}!</h3>
        <div>
          {description
            ?
            <p>{description}</p>
            :
            <p>Расскажите о себе</p>}
        </div>
      </div>
    </>
  )
}
