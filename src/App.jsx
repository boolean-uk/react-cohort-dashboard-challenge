import Header from './components/Header'
import Aside from './components/Aside'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Header />
      <Aside />
      <Routes> 
        <Route
          to="/" 
          element={ <Dashboard />}
          />
      </Routes>
    </>
  )
}

export default App
