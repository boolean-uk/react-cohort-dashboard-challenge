import { useState } from 'react'
import { Route, Routes }  from 'react-router-dom'
import './App.css'

import Header from './components/header/header'
import Menu from './components/menu/menu'
import Content from './components/content/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <Header/>
      <Menu/>
      <Routes>
        <Route
        path='/'
        element={<Content/>}
        />
      </Routes>
    </div>
    
    </>
  )
}

export default App
