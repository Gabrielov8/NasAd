import React from 'react';

export default function Button({
  text,
  onClick,
  type,
  onSubmit,
  id,
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        onSubmit={onSubmit}
        id={id}
      >{text}
      </button>
    </>
  )
}
