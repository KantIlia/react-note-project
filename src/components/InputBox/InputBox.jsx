import './InputBox.css'
import HeaderInput from '../HeaderInput/HeaderInput.jsx'
import TextInput from '../TextInput/TextInput.jsx'
import SaveButton from '../SaveButton/SaveButton.jsx'
import CleanButton from '../CleanButton/CleanButton.jsx'
import React, {useState} from 'react'


function InputBox({ onSave }) {
    const [noteArray, setNoteArray] = useState([]);
  
    const saveNote = () => {
        const header = document.getElementById('headerInput').value;
        const text = document.getElementById('textInput').value;
        const newNote = { header, text };
  
        setNoteArray([...noteArray, newNote]);
        onSave([...noteArray, newNote]);
        console.log(noteArray, ' - check input array');
    }
  
    const cleanNote = () => {
      document.getElementById('headerInput').value = '';
      document.getElementById('textInput').value = '';
    }
  
    return (
      <>
        <HeaderInput />
        <TextInput />
        <SaveButton onSave={saveNote} />
        <CleanButton onClean={cleanNote} />
      </>
    )
  }
  
  export default InputBox;
  