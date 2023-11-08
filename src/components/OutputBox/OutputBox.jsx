import './OutputBox.css';
import { useState, useEffect } from 'react';
import DeleteNote from '../DeleteNote/DeleteNote';

function OutputBox({ notes }) {
  const [outputArray, setOutputArray] = useState([]);

  useEffect(() => {
    if (notes.length > 0) {
      const lastNote = Array.isArray(notes[notes.length - 1]) ? notes[notes.length - 1][0] : notes[notes.length - 1];
      setOutputArray(prevArray => [...prevArray, { ...lastNote }]);
    }
  }, [notes]);

  useEffect(() => {
    if (outputArray.length > 0) {
      console.log(outputArray, 'outputArray check');
    }
  }, [outputArray]);

  const deleteNote = (index) => {
    const updatedOutputArray = outputArray.filter((_, i) => i !== index);
    setOutputArray(updatedOutputArray);
  };

  return (
    <div className='OutputDiv'>
      {outputArray.map((note, index) => (
        <div key={index} id={`outputArray-${index}`} className="outputArray-div">
          <p className="outputArray-number">Note: {index + 1}</p>
          <p className="outputArray-header">Header: {note.header}</p>
          <p className="outputArray-text">Text: {note.text}</p>
          <DeleteNote onDelete={() => deleteNote(index)} />
        </div>
      ))}
    </div>
  );
}

export default OutputBox;
