import './TextInput.css'
import React from 'react'

function TextInput() {
    return (
        <div className='divTekstInput'>
            <input id='TekstInput' className='TekstInput' type="text" placeholder='enter text' />
        </div>
    )
}

export default TextInput;