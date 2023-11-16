import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './NoteForm.css';


export default function NoteForm({ initialValues, saveButton, updateNote }) {
  const [text, setText] = useState(initialValues ? initialValues.text : '');
  const [header, setHeader] = useState(initialValues ? initialValues.header : '');


  const handleSaveButton = () => {
    if (initialValues) {
      updateNote(initialValues.id, header, text, initialValues.dateTime);
    } else {
      saveButton(header, text);
      setText('');
      setHeader('');
    }
  };


  const handleDeleteButton = () => {
    setText('');
    setHeader('');
  };

  
  return (
    <div className='inputBox'>
      <input
        className='inputHeader'
        name='myInputHeader'
        type='text'
        value={header}
        maxLength={25}
        placeholder='Title'
        onChange={(e) => setHeader(e.target.value)}
      />

      <TextareaAutosize
        className='inputText'
        name='myInputText'
        type='text'
        value={text}
        placeholder='Text of note'
        onChange={(e) => setText(e.target.value)}
        minRows={3}
        maxRows={20}
        style={{ whiteSpace: 'pre-line' }}
      />

      <button onClick={handleSaveButton} disabled={!text.trim()}>Save note</button>
      <button onClick={handleDeleteButton}>Clean note</button>
    </div>
  );
}