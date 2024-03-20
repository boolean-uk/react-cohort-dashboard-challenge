import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import './App.css'
import header from './assets/header.svg'
import PostDetails from './Posts/PostDetails';

//URL to fetch data
const GET_POSTS = "https://boolean-api-server.fly.dev/guro18/post"
const GET_CONTACTS = "https://boolean-api-server.fly.dev/guro18/contact"

//state for posts and contacts
function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);

  // //fetch posts
  // useEffect(() => {
  //   console.log('running fetch: ', GET_POSTS);
  //   fetch(GET_POSTS)
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     setPosts(responseData)
  //     console.log('post data',responseData);
  //   });
  // }, []);


  // //fetch contacts
  // useEffect(() => {
  //   console.log('fetching contacts', GET_CONTACTS)
  //   fetch(GET_CONTACTS)
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     console.log('Posts fetched:', responseData);
  //     setContacts(responseData)
  //   });
  // }, []);

  useEffect(() => {
    console.log('Fetching data...');
    
    Promise.all([
      fetch(GET_POSTS).then(response => response.json()),
      fetch(GET_CONTACTS).then(response => response.json())
    ])
    .then(([postsData, contactsData]) => {
      console.log('Posts fetched:', postsData);
      console.log('Contacts fetched:', contactsData);
      setPosts(postsData);
      setContacts(contactsData);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  console.log('contacts: ', contacts);
  console.log('posts: ', posts);
  //set default user to have ID = 1
  const currentUser = contacts.find((contact) => 
  contact.id === 1);
  console.log('user: ', currentUser);

  //update when new posts are created
  const handleAddPosts = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  return (
    <>
      <header>
        {currentUser && (
            <div className="initials-circle">{currentUser.firstName[0]} {currentUser.lastName[0]}</div>
          )}
        <img src={header} alt='headerIcon'></img>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard posts = {posts} contacts = {contacts} onAddPost={handleAddPosts}/>}/>
        <Route path="/view-post" element={<PostDetails props = {posts}/>}/>
        <Route path="/view-post/:id" element={<PostDetails posts = {posts} contacts={contacts}/>}/>
      </Routes>
    </>
  )
}

export default App
