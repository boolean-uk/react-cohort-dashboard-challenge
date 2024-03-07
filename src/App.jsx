import { useState } from 'react';
import './styles/App.css'
import { createContext } from 'react'
import { useEffect } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import PostDetails from './pages/PostDetails';

export const UserContext = createContext();
export const PostContext = createContext();
export const CommentContext = createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/spectraldesign/contact')
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
  }, []);

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/spectraldesign/post')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          return b.id - a.id;
        });
        setPosts(sortedData);
        sortedData.forEach((post) => {
          fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${post.id}/comment`)
            .then((response) => response.json())
            .then((data) => {
              setComments((prev) => {
                return {
                  ...prev,
                  [post.id]: data
                }
              })
            })
        })
      })
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <PostContext.Provider value={{ posts, setPosts }}>
        {
          user ?
            <Header />
            :
            <h1>Loading...</h1>
        }
        <Navbar />

        <CommentContext.Provider value={{ comments, setComments }}>
          <Routes>
            <Route path="/" element={
              <Home />
            } />
            <Route path="/post/:id" element={
              <PostDetails />
            } />

            <Route path="/profile/:id" element={
              <Profile />
            } />
          </Routes>
        </CommentContext.Provider>
      </PostContext.Provider>
    </UserContext.Provider>
  )
}

export default App
