import './App.css';
import { useEffect, useState, createContext } from 'react';
import { Route, Routes, Link, BrowserRouter, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Home';
import PostPage from './components/PostPage';
import PostForm from './components/PostForm';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

export const PostContext = createContext();
export const UserContext = createContext();

export default function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  const baseUrl = 'https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post';
  const UserUrl = 'https://boolean-uk-api-server.fly.dev/Julia-Lindgren/contact/1';

  const fetchPosts = async () => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }

  const fetchUser = async () => {
    fetch(UserUrl)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <UserContext.Provider value={{ user, setUser }}>
        <>

          <BrowserRouter>
            <div className="app-layout">
              <Header />
              <div className="main-content">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/post/:postId" element={<PostPage />} />
                  <Route path="/edit-post/:postId" element={<PostForm />} />
                  <Route path="/profile/:userId" element={<Profile />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>

        </>
      </UserContext.Provider>
    </PostContext.Provider >
  );
}