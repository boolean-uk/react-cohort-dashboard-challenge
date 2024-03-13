import { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './DashBoard';
import './App.css'
import PostDetails from './Posts/PostDetails';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import ProfilePage from './components/ProfilePage';


const GET_POSTS = "https://boolean-api-server.fly.dev/OnealLane/post"
const GET_CONTACTS = "https://boolean-api-server.fly.dev/OnealLane/contact"
export const ContactContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(GET_POSTS)
    .then((response) => response.json())
    .then((responseData) => {
      setPosts(responseData)
    })
  }, []);


  useEffect(() => {
    fetch(GET_CONTACTS)
    .then((response) => response.json())
    .then((responseData) => {
      setContacts(responseData)
    })
    ;
  }, []);

  const currentUser = contacts.find((contact) => 
  contact.id === 1);

  const userInitials = currentUser ? (currentUser.firstName[0] + currentUser.lastName[0]) : '';

  const handleAddPosts = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  return (
    <>
    {contacts.length > 0 &&
    <ContactContext.Provider value={contacts}>
    {currentUser && (
      <Header name={userInitials} id={1} />
    )}
    <LeftMenu/>
    <Routes>
      <Route path="/" element={<Dashboard posts={posts} contacts={contacts} onAddPost={handleAddPosts} />} />
      <Route path="/view-post" element={<PostDetails props={posts} />} />
      <Route path="/view-post/:id" element={<PostDetails posts={posts} contacts={contacts} />} />
      
      <Route path='/profile/:id' element={<ProfilePage id={1}/>}/>

    </Routes>
    </ContactContext.Provider> }
  </>
  )
}

export default App