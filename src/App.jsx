import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SinglePostPage from './pages/SinglePostPage';

import { useContext, useEffect } from 'react';
import { UserContextAPIContext } from './contextAPI/UserContextAPI';
import { HttpRequestsContextAPIContext } from './contextAPI/HttpRequestsContextAPI';
import axios from 'axios';


function App() {


  const {setUser} = useContext(UserContextAPIContext)
  const {baseURLContact} = useContext(HttpRequestsContextAPIContext)

  useEffect(() => {

      const fetchData = async () => {
          try {
              const response = await axios.get(baseURLContact + "/1");
              if(response) {
                  setUser(response.data);
              }
           
          } catch (error) {
             console.error(error) 
          }
      }
    fetchData();
  }, []);

  return (
    <>
    <Routes>
    
        <Route path="/" element={<Dashboard />} />
        <Route path="/singlePost/:postId" element={<SinglePostPage />} />

      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </>
  )
}

export default App
