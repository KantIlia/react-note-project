import './OutputNotes.css'


export default function OutputNotes({ noteArray, deleteNote }) {


  return(
    <div className='outpuxBox'>
    {noteArray.map((item, index) => (
      <div key={index}>
        <button onClick={() => deleteNote(index)}>X</button>
        <p>Header: {item.header}</p>
        <p>Text: {item.text}</p>
        <p>Date and Time: {item.dateTime}</p>
      </div>
    ))}
</div>
  )
}