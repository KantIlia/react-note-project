import './TextInput.css'
import React from 'react'

function TextInput() {
    return (
        <div className='divTextInput'>
            <input id='textInput' className='textInput' type="text" placeholder='enter text' />
        </div>
    )
}

export default TextInput;