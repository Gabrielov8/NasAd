import React from 'react';

export default function Button({
  text,
  onClick,
  type,
  onSubmit,
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        onSubmit={onSubmit}
      >{text}
      </button>
    </>
  )
}
