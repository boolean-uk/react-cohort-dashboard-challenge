import { createContext, useState, useEffect } from 'react'
import './App.css'
import Header from './pages/Header';
import SideMenu from './pages/SideMenu';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

export const DataContext = createContext();

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://boolean-api-server.fly.dev/KonWritesCode/post')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [] )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://boolean-api-server.fly.dev/KonWritesCode/contact')
        const data = await response.json()
        setContacts(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [] )
  
  console.log("My contacts fetched")
  console.log(contacts)


  return (
    <div className='view'>
      <Header/>
      <div className="view-container">{
        <DataContext.Provider value={{posts: posts, setPosts: setPosts, contacts: contacts, setContacts: setContacts}}>
          <SideMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
        </DataContext.Provider>}
      </div>
    </div>
  );
}
export default App
