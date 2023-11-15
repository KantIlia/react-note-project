import './Module.css';
import React from 'react';
import Modal from 'react-modal';
import NoteForm from '../NoteForm/NoteForm';


export default function CustomModule({ note, showModal, toggleShowModal, saveButton, updateNote }) {
  Modal.setAppElement('#root');


  return (
    <Modal
      isOpen={showModal}
      onRequestClose={toggleShowModal}
      className='moduleContainer'
      overlayClassName='overlay'
    >
      <div className='moduleContent'>
        <NoteForm initialValues={note} saveButton={saveButton} updateNote={updateNote} />
        <button onClick={toggleShowModal}>Close</button>
      </div>
    </Modal>
  );
}
