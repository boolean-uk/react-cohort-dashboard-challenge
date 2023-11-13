import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import { Routes, Route } from 'react-router-dom'
import ProfileForm from './components/ProfileForm'
import Posts from './components/Main/Posts'
import './App.css'

function App() {
 

  return (
    <>
    <div className="container">
     <Header />
     <Aside />
    <Routes>
      <Route exact path="/"/>  
      <Route path="/profileForm" element={<ProfileForm />} />
      <Route path="/post/:id" element={<Posts />} />
    </Routes>
    </div>
    </>
  )
}

export default App
