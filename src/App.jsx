import Header from './components/Header'
import Aside from './components/Aside'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SelectedPostPage from './components/components/SelectedPostPage'

function App() {




  return (
    <>
      <Header />
      <main>
        <Aside />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/post/:id" element={<SelectedPostPage />}/>
        </Routes>
        
      </main>
    </>
  )
}

export default App
