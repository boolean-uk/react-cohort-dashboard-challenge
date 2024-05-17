import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoardPage'
import Profile from './pages/ProfilePage'
import PostPage from './pages/PostPage'
import { fetchContacts } from './services/api'
import { ContactsContext } from './context/ContactsContext'
import Header from './components/Header'
import Navigation from './components/Navigation'

function App() {

  const [contacts, setContacts] = useState([])

  async function getContacts() {
    const contactsResponse = await fetchContacts()
    setContacts(contactsResponse)

  }
  useEffect(() => {getContacts()}, [])
console.log("data:", contacts)
  return (
< ContactsContext.Provider value={contacts} >

  <div className='app'>
  <Header/>
<Navigation/>
<main className='dashboard'>
<Routes>
  <Route path='/' element={<DashBoard/>} />
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/post/:id' element={<PostPage/>}/>
</Routes>
</main>
  </div>

</ ContactsContext.Provider>
  )
}

export default App
