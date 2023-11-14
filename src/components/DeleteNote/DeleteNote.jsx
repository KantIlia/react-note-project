import React from 'react';

export default function DeleteNote({ onDelete, id }) {
  const handleClick = () => {
    onDelete(id);
  }

  return (
    <button onClick={handleClick}>X</button>
  );
}

