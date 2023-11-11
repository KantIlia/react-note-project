import './TextInput.css'
import React, { useState } from 'react'

function TextInput() {
    const [noteText, setNoteText] = useState('')
    return (
        <div className='divTextInput'>
            <input id='textInput' value={noteText} onChange={(e)=>setNoteText(e.target.value)}  className='textInput' type="text" placeholder='enter text' />
            <button onClick={()=>setNoteText("hello")}>click me</button>
            {noteText}
        </div>
    )
}

export default TextInput;   