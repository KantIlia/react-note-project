import React, { useState, useEffect } from 'react';
import OutputNotes from '../OutputNotes/OutputNotes';
import NoteForm from '../NoteForm/NoteForm';
import CustomModule from '../Module/Module';
import { v4 as uuidv4 } from 'uuid';


export default function InputBox() {
  const [noteArray, setNoteArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState();


  // cheking block
  useEffect(() => {
    console.log('all array', noteArray);
  }, [noteArray]);


  useEffect(() => {
    console.log('modal note', selectedNote);
  }, [selectedNote]);


  // saving and updatting array block
  const saveButton = (header, text) => {
    const newItem = { id: uuidv4(), header, text, dateTime: new Date().toLocaleString(), changingDate: '' };
    setNoteArray((prevNoteArray) => [...prevNoteArray, newItem]);
  };


  const updateNote = (id, header, text, dateTime) => {
    const updatedArray = [...noteArray];
    const index = updatedArray.findIndex((note) => note.id === id);
    updatedArray[index] = {
      id,
      header,
      text,
      dateTime,
      changingDate: new Date().toLocaleString(),
    };  
    setNoteArray(updatedArray);
    toggleShowModal()
  };


  const deleteNote = (id) => {
    if (window.confirm('Do you really want to delete this note?')) {
      setNoteArray((prevNoteArray) => {
        const updatedArray = [...prevNoteArray];
        updatedArray.splice(id, 1);

        if (updatedArray.length === 0) {
          localStorage.removeItem('noteArray');
        }

        return updatedArray;
      });
    }
  };


  // modal open block //
  const toggleShowModal = () => {
    setShowModal(!showModal);
  };


  const handleNoteClick = (note) => {
    setSelectedNote(note);
    toggleShowModal();
  };


  // localserver working
  useEffect(() => {
    if (noteArray.length > 0) {
      localStorage.setItem('noteArray', JSON.stringify(noteArray));
    }
  }, [noteArray]);


  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('noteArray'));
    if (storedArray && !noteArray.length) {
      setNoteArray(storedArray);
    }
  }, []);


  return (
    <div className='mainDiv'>
      <NoteForm saveButton={saveButton} updateNote={updateNote} />
      <OutputNotes noteArray={noteArray} deleteNote={deleteNote} handleNoteClick={handleNoteClick} showModal={showModal} toggleShowModal={toggleShowModal} />
      {showModal && (
        <CustomModule note={selectedNote} showModal={showModal} toggleShowModal={toggleShowModal} saveButton={saveButton} updateNote={updateNote} />
      )}
    </div>
  );
}