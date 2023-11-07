import './App.css'
import InputBox from './components/InputBox/InputBox.jsx'

function App() {
    return (
      <div className="mainDiv">
        <div className='DivInputNote'>
          <h1>Note App</h1>
          <div className='InputBox'>
            <InputBox />
          </div>
        </div>
        <div className='DivOutputNote'>2</div>
      </div>
  )
}

export default App
