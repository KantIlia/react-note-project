import React from 'react';

function DeleteNote({ onDelete, index }) {
  const handleClick = () => {
    onDelete(index);
  }

  return (
    <button onClick={handleClick}>X</button>
  );
}

export default DeleteNote;