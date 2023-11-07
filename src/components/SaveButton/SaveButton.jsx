import './SaveButton.css'
import React from 'react'

function SaveButton({ onSave }) {
    return (
        <div className='SaveButton.css'>
            <button className='SaveButton' onClick={onSave}>Save note</button>
        </div>
    )
}

export default SaveButton;