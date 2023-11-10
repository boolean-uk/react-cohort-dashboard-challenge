import { useState } from 'react'
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
      <Content/>
    </div>
    </>
  )
}

export default App
