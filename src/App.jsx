import { useState } from 'react'
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
    <Home />



      </div>
    </>
  )
}

export default App;
