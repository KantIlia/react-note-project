import './Module.css';
import React from 'react';
import Modal from 'react-modal';

export default function CustomModule({ noteArray, showModal, setShowModal }) {

    const closeModal = () => {
        setShowModal(false);
    }

    Modal.setAppElement('#root');
    
    console.log("Note Array:", noteArray);

    


    return ( 
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          className='moduleContainer'
          overlayClassName='overlay'
        >
          <div className='moduleContent'>
                <h2>{noteArray.header}</h2>
                <p>{noteArray.text}</p>
                <p>Date and Time: {noteArray.dateTime}</p>

            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
    );
}