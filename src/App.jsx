import { useState } from 'react'
import { Route, Routes }  from 'react-router-dom'
import './App.css'

import Header from './components/header/header'
import Menu from './components/menu/menu'
import Content from './components/content/content'
import Post from './components/content/subcomponents/post'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <Header/>
      <Menu/>
      <Routes>
        <Route
        path="/"
        element={<Content/>}
        />
        <Route
        path="/profile"
        element={<p>profile goes here</p>}
        />
        <Route
        path={"/post/:UID"}
        element={<Post/>}
        />
      </Routes>
    </div>
    
    </>
  )
}

export default App
