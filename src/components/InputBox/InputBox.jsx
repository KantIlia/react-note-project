import './InputBox.css';
import React, { useState } from 'react';
import OutputNotes from '../OutputNotes/OutputNotes';
import TextareaAutosize from 'react-textarea-autosize';


export default function InputBox() {

  const[text, setText] = useState('');
  const[header, setHeader] = useState('');
  const[noteArray, setNoteArray] = useState([]);

  const saveButton = () => {
    if(text === '')
      alert('Pleaze enter text of noat');
    else  {
      const newItem = { header, text, dateTime: new Date().toLocaleString() };
      setNoteArray((prevNoteArray) => {
        const updatedArray = [...prevNoteArray, newItem];
        console.log('array:', updatedArray);
        return updatedArray;
      });
    }
  
  setText('');
  setHeader('');
  }

  const deleteButton = () => {
    setText('');
    setHeader('');
  }

  const deleteNote = (index) => {
    if (window.confirm("Do you really want to delete this note?")) {
      setNoteArray((prevNoteArray) => {
        const updatedArray = [...prevNoteArray];
        updatedArray.splice(index, 1);
        console.log('array after delete:', updatedArray);
        return updatedArray;
      });
    }
  };

  return(
   

    <div className='mainDiv'>

      <div className='inputBox'> 
        
        <input 
          className='inputHeader' 
          name="myInputHeader" 
          type='text' 
          value={ header } 
          maxLength={25} 
          placeholder='Tittle' 
          onChange={(e) => setHeader(e.target.value)}/>

        <TextareaAutosize  
          className='inputText' 
          name="myInputText" type='text' 
          value={ text } 
          placeholder='text of noat' 
          onChange={(e) => setText(e.target.value)} 
          minRows={3}
          maxRows={20}
          style={{ whiteSpace: 'pre-line' }} />
          
        <button onClick={ saveButton } >Save note</button>
        <button onClick={ deleteButton }>Clean note</button>
      </div>

     <>
     <OutputNotes noteArray={noteArray} deleteNote={deleteNote} />
     </>

    </div>
  )
}