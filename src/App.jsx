import './App.css'
import Header from './components/Header/Header'
import LeftMenu from './components/Left-Menu/LeftMenu'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Feed/Home'
import Profile from './components/Profile/Profile'
import { createContext, useEffect, useState } from 'react'
import { GetAllContacts, GetContactById, GetPosts } from './PostAPIs/PostAPI'
import PostDetail from './components/Feed/PostDetail'

export const PostContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]); 
  const username = 'john';
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  const fetchPosts = async () => {
    try {
      const result = await GetPosts(username);
      setPosts(result.reverse());

    } catch(error) {
      console.error("Error in fetching posts " + error);
    }
  }

  const fetchAuthors = async () => {
    try {
      const result = await GetAllContacts(username);
      setAuthors(result);

    } catch(error) {
      console.error("Error in fetching posts " + error);
    }
  }

  const fetchLoggedInUser = async () => {
    //LoggedInUser is contactId 1
    try {
      const result = await GetContactById(username, 1);
      setLoggedInUser(result);
      // console.log(loggedInUser);
    } catch(error) {
      console.error("Error in fetching logged in user " + error);
    }
  }


  useEffect(() => {
    fetchLoggedInUser();
    fetchPosts();
    fetchAuthors();
  }, [loggedInUser])

  if (!loggedInUser) {
    return <p>Loading.....</p>;
  }

  return (
    <PostContext.Provider value={{posts, setPosts, username, authors, setAuthors, loggedInUser }}>
    <div className="root-container">
      <Header />
      <div className="row-container">
        <LeftMenu />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
       
      </div>
    </div>
    </PostContext.Provider>
  );
}

export default App
