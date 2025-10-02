import './App.css'
import NoteComponent from './component/notes/NoteComponent';

function App() {
  let user = "Sadeq";

  return (
    <div>
      <h1>Welcome to Notes</h1>
      <p>Hello, {user} </p>
      <NoteComponent/>
    </div>
  )
}

export default App
