import './App.css'
import InputBox from './components/InputBox/InputBox.jsx'
import OutputBox from './components/OutputBox/outputBox.jsx'
import { useState } from 'react'


function App() {
  const [notes, setNotes] = useState([]);

  const saveNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
    console.log(newNote, 'check APP');
  };

  return (
    <div className="mainDiv">
      <div className='DivInputNote'>
        <h1>Note App</h1>
        <div className='InputBox'>
          <InputBox onSave={saveNote} />
        </div>
      </div>
      <div className='DivOutputNote'>
        <OutputBox notes={notes} />
      </div>
    </div>
  )
}

export default App
