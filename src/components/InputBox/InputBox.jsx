import './InputBox.css'
import HeaderInput from '../HeaderInput/HeaderInput.jsx'
import TextInput from '../TextInput/TextInput.jsx'
import SaveButton from '../SaveButon/SaveButton.jsx'
import CleanButton from '../CleanButton/CleanButton.jsx'
import React from 'react'

function InputBox() {
    return (
    <>
        <HeaderInput />
        <TextInput />
        <SaveButton />
        <CleanButton />
    </>
    )
}


export default InputBox;