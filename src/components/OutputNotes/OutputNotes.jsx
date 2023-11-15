import React from 'react';
import './OutputNotes.css';


export default function OutputNotes({ noteArray, deleteNote, handleNoteClick }) {
  const handleButtonClick = (id, e) => {
    e.stopPropagation();
    deleteNote(id);
  };


  const handleItemClick = (note) => {
    handleNoteClick(note);
  };


  return (
    <div className='outpuxBox'>
      {noteArray.slice().reverse().map((item, id) => (
        <div key={id} onClick={() => handleItemClick(item)}>
          <div>
            <button className='DeleteButton' onClick={(e) => handleButtonClick(id, e)}>
              <img src='/delete icon.png' alt="Close Icon" />
            </button>
            <h2>Title: {item.header}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>Text: {item.text}</p>
            <p className='note-date'>Date of creation: {item.dateTime}</p>
          </div>
          {item.changingDate && <p className='note-date'>Last change: {item.changingDate}</p>}
        </div>
      ))}
    </div>
  );
}