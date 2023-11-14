import CustomModule from '../Module/Module';
import './OutputNotes.css';
import { useState } from 'react';

export default function OutputNotes({ noteArray, deleteNote }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState();

  const toggleShowModal = (fromDeleteButton) => {
    if (!fromDeleteButton) {
      setShowModal(!showModal);
      console.log('check');
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    toggleShowModal();
  };

  return (
    <div className='outpuxBox'>
      {noteArray.slice().reverse().map((item, id) => (
        <div key={id} onClick={() => handleNoteClick(item)}>
          <button onClick={() => { deleteNote(id); toggleShowModal(false); }}>X</button>
          <h2>{item.header}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>Text: {item.text}</p>
          <p>Date and Time: {item.dateTime}</p>
        </div>
      ))}
      {showModal && <CustomModule note={selectedNote} showModal={showModal} toggleShowModal={toggleShowModal} />}
    </div>
  );
}
