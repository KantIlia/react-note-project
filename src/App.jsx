import './App.css'
import InputBox from './components/InputBox/InputBox.jsx'
import { useState, useEffect } from 'react'


export default function App() {
  return(
    <div className='InputBox'>
      <InputBox />
    </div>
  )
}




// export default function App() {
//   const [notes, setNotes] = useState([]);

//   const saveNote = (newNote) => {
//     setNotes((prevNotes) => [...prevNotes, newNote]);
//   };

//   useEffect(() => {
//     console.log(notes, ' - check app array');
//   }, [notes]);

//   return (
//     <div className="mainDiv">
//       <div className='DivInputNote'>
//         <h1>Note App</h1>
//         <div className='InputBox'>
//           <InputBox onSave={saveNote} />
//         </div>
//       </div>
//       <div className='DivOutputNote'>
//         <OutputBox notes={notes} />
//       </div>
//     </div>
//   )
// }
