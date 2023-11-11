import './InputBox.css'
import React, { useState } from 'react'


export default function InputBox() {

  const[text, setText] = useState('');
  const[header, setHeader] = useState('');
  const[noteArray, setNoteArray] = useState('');

  const saveButton = () => {
    const newItem = { header, text, dateTime: new Date().toLocaleString() };
    setNoteArray((prevNoteArray) => {
      const updatedArray = [...prevNoteArray, newItem];
      console.log('array:', updatedArray);
      return updatedArray;
    });
  
  setText('');
  setHeader('');
  }

  const deleteButton = () => {
    setText('');
    setHeader('');
  }


  return(
    <div className='mainDiv'>
      <div className='inputBox'> 

        <label className='inputHeader'>
          Header: <input name="myInputHeader" type='text' value={ header } placeholder='note header' onChange={(e) => setHeader(e.target.value)} />
        </label>
        <hr />

        <label className='inputText'>
          Text: <input name="myInputText" type='text' value={ text } placeholder='note header' onChange={(e) => setText(e.target.value)} />
        </label>
        <hr />

        <button onClick={ saveButton } >Save</button>
        <button onClick={ deleteButton }>Clean</button>
      </div>

      <div className='outpuxBox'>
        {noteArray.map((item, index) => (
          <div key={index}>
            <p>Header: {item.header}</p>
            <p>Text: {item.text}</p>
            <p>Date and Time: {item.dateTime}</p>
            <hr />
          </div>
        ))}
      </div>

    </div>
  )
}





// function InputBox({ onSave }) {
//   const [noteArray, setNoteArray] = useState([]);

//   const saveNote = () => {
//       const header = document.getElementById('headerInput').value;
//       const text = document.getElementById('textInput').value;
//       const newNote = { header, text };

//       setNoteArray((prevNoteArray) => [...prevNoteArray, newNote]);
//       onSave(noteArray);
//   }

//   useEffect(() => {
//     console.log(noteArray, ' - check input array');
//   }, [noteArray]);

//   const cleanNote = () => {
//     document.getElementById('headerInput').value = '';
//     document.getElementById('textInput').value = '';
//   }

//   return (
//     <>
//       <HeaderInput />
//       <TextInput />
//       <SaveButton onSave={saveNote} />
//       <CleanButton onClean={cleanNote} />
//     </>
//   )
// }

//   export default InputBox;
  