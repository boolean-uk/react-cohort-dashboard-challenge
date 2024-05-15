import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoardPage'
import Profile from './pages/ProfilePage'
import PostPage from './pages/PostPage'

function App() {

  return (
<>
{/* <Header/>
<Navigation/> */}
<Routes>
  <Route path='/' element={<DashBoard/>} />
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/post/:id' element={<PostPage/>}/>
</Routes>
</>
  )
}

export default App
