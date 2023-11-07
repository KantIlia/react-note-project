import './CleanButton.css'
import React from 'react'

function CleanButton( {onClean}) {

    const handleClean = () => {
        onClean();
    };

    return (
        <div className='DivCleanButton'>
            <button className='CleanButton' onClick={handleClean} >Delete</button>
        </div>
    )
}

export default CleanButton;