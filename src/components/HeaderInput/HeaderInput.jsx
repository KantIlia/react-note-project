import './headerInput.css'
import React from 'react'

function HeaderInput() {
    return (
        <div className='divHeaderInput'>
            <input id='headerInput' className='headerInput' type="text" placeholder='Header' />
        </div>
    )
}

export default HeaderInput;