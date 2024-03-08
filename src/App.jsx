import { createContext, useState, useEffect } from 'react'
import './App.css'
import Header from './pages/Header';
import SideMenu from './pages/SideMenu';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import fetchData from './service/FetchData';

export const DataContext = createContext();

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])
  const [user, setUser] = useState({})
  
  useEffect(() => {
    fetchData('https://boolean-api-server.fly.dev/KonWritesCode/post', setPosts)
    fetchData('https://boolean-api-server.fly.dev/KonWritesCode/contact', setContacts)
    fetchData('https://boolean-api-server.fly.dev/KonWritesCode/contact/1', setUser)
  }, [] )

  return (
    <div className='view'>
      <Header/>
      <div className="view-container">{
        <DataContext.Provider value={{user: user, posts: posts, setPosts: setPosts, contacts: contacts, setContacts: setContacts}}>
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
