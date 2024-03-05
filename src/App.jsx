import { useState } from 'react';
import './styles/App.css'
import { createContext } from 'react'
import { useEffect } from 'react';
import Header from './components/Header';

export const UserContext = createContext();
export const PostContext = createContext();
export const CommentContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/spectraldesign/post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
    fetch('https://boolean-api-server.fly.dev/spectraldesign/contact')
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
  }, []);

  useEffect(() => {
    posts.forEach(post => {
      fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${post.id}/comment`)
        .then((response) => response.json())
        .then((data) => setComments(data));
    })
  }, [posts]);
  return (
    <div className="App">
      <UserContext.Provider value={{user}}>
        <Header />
        <PostContext.Provider value={{ posts, setPosts }}>
          <CommentContext.Provider value={{ comments, setComments }}>
            <h1>Posts</h1>
            <ul>
              {posts.map((post, index) => (
                <li key={index}>{post.title}</li>
              ))}
            </ul>
          </CommentContext.Provider>
        </PostContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
