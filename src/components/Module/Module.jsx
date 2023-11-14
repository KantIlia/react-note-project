import './Module.css';
import React from 'react';
import Modal from 'react-modal';
import NoteForm from '../NoteForm/NoteForm';

export default function CustomModule({ note, showModal, toggleShowModal }) {
    Modal.setAppElement('#root');
    
    console.log("Note:", note);

  return ( 
    <Modal
      isOpen={showModal}
      onRequestClose={() => toggleShowModal()}
      className='moduleContainer'
      overlayClassName='overlay'
    >
      <div className='moduleContent'>
        <NoteForm initialValues={note} saveButton={note.saveButton} updateNote={note.updateNote} />
        <button onClick={() => toggleShowModal()}>Close</button>
      </div>
    </Modal>
  );
}
