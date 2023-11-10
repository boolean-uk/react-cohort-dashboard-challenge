import Header from './components/Header'
import Aside from './components/Aside'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SelectedPostPage from './components/components/SelectedPostPage'

function App() {

  const mockLoggedInUserId = 1

  return (
    <>
      <Header mockLoggedInUserId={mockLoggedInUserId}/>
      <main>
        <Aside />
        <Routes>
          <Route path="/" element={<Dashboard mockLoggedInUserId={mockLoggedInUserId}/>}/>
          <Route path="/post/:id" element={<SelectedPostPage mockLoggedInUserId={mockLoggedInUserId} />}/>
        </Routes>
        
      </main>
    </>
  )
}

export default App
