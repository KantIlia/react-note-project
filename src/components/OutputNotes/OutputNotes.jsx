import CustomModule from '../Module/Module'
import './OutputNotes.css'
import { useState } from 'react'

export default function OutputNotes({ noteArray, deleteNote }) {


  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState();

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setShowModal(true);
  };

  
  return(
    <div className='outpuxBox'>
    {noteArray.slice().reverse().map((item, index) => (
      <div key={index} onClick={() => handleNoteClick(item)}>
        <button onClick={() => deleteNote(index)}>X</button>
        <h2>{item.header}</h2>
        <p style={{ whiteSpace: 'pre-line' }} >Text: {item.text}</p>
        <p>Date and Time: {item.dateTime}</p>
      </div>
    ))}
     {showModal && (
  <CustomModule noteArray={selectedNote} showModal={showModal} setShowModal={setShowModal} />

     )}
        </div>

  )
}
