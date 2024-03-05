import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {


  return (
    <>
      <Header />
      <div className='container-nav-main'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
