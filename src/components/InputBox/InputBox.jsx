import './InputBox.css'
import HeaderInput from '../HeaderInput/HeaderInput.jsx'
import TextInput from '../TextInput/TextInput.jsx'
import SaveButton from '../SaveButton/SaveButton.jsx'
import CleanButton from '../CleanButton/CleanButton.jsx'
import React, {useState} from 'react'


function InputBox() {

     const saveNote = () => {
        console.log(document.getElementById('headerInput').value + ' - Header');
        console.log(document.getElementById('TekstInput').value + ' - text');

     }

     const cleanNote = () => {
       document.getElementById('headerInput').value = '';
       document.getElementById('TekstInput').value = '';
    }

    return (
    <>
        <HeaderInput />
        <TextInput />
        <SaveButton onSave={saveNote}/>
        <CleanButton onClean={cleanNote} />
    </>
    )
}


export default InputBox;