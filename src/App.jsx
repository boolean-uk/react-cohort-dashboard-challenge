import './App.css'
import { useEffect, useState, createContext } from 'react';
import {Routes, Route} from "react-router-dom";
import DashBoard from './components/DashBoard'
import ProfileView from './components/ProfileView';
export const PostsContext = createContext();

function App() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/StianNordvik/post")
    .then((response) => response.json())
    .then((data) => setPosts(data))
  }, []);


  return (
    <>
    <PostsContext.Provider value={{posts, setPosts}}>
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/profile/:id" element={<ProfileView />} />
    </Routes>
    </PostsContext.Provider>
    </>
  )
}

export default App
