import './InputBox.css';
import React, { useState, useEffect } from 'react';
import OutputNotes from '../OutputNotes/OutputNotes';
import NoteForm from '../NoteForm/NoteForm';
import { v4 as uuidv4 } from 'uuid';

export default function InputBox() {
  const [noteArray, setNoteArray] = useState([]);

  useEffect(() => {
    console.log(noteArray); 
  }, [noteArray]);

  const saveButton = ( header, text) => {
      const newItem = { id: uuidv4(), header, text, dateTime: new Date().toLocaleString(), changingDate: '' };
      setNoteArray((prevNoteArray) => [...prevNoteArray, newItem]); 
  };

  const deleteNote = (id) => {
    if (window.confirm('Do you really want to delete this note?')) {
      setNoteArray((prevNoteArray) => {
        const updatedArray = [...prevNoteArray];
        updatedArray.splice(id, 1);

        return updatedArray;
      });
    }
  };

  const updateNote = (id, header, text) => {
    const updatedArray = [...noteArray];
    const index = updatedArray.findIndex((note) => note.id === id);
    updatedArray[index] = {
      id,
      header,
      text,
      dateChangeTime: new Date().toLocaleString(),
    };
    setNoteArray(updatedArray);
  };

  return (
    <div className='mainDiv'>
      <NoteForm saveButton={saveButton} updateNote={updateNote} />
      <OutputNotes noteArray={noteArray} deleteNote={deleteNote}  />
    </div>
  );
}