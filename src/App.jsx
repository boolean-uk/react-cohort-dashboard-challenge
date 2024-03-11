import { createContext, useEffect, useState } from 'react'
import CreatePost from './pages/Dashboard/components/CreatePost.jsx';
import Header from './Header.jsx';
import Posts from './pages/Dashboard/components/Posts.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import ProfileForm from './pages/Profile/components/ProfileForm.jsx';
import PostDetails from './pages/Dashboard/components/PostDetails.jsx';


//Create a context for posts
const MyContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])
  const [user, setUser] = useState()

  function getPosts(){
    //Fetch posts data from API
    fetch('https://boolean-api-server.fly.dev/santhia97/post')
      .then(response => response.json())
      .then(data => setPosts(data.reverse()))
      .catch(error => console.error('Error fetching data:', error))
  }

  function getContacts(){
    fetch('https://boolean-api-server.fly.dev/santhia97/Contact')
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setContacts(data)
        setUser(data.find(x => x.id === 1))
      })
      .catch(error => console.error('Error fetching data:', error))
  }

  function getInitials(name) {
    const names = name.split(' ');
    const initials = names.map(name => name.charAt(0).toUpperCase()).join('');
    return initials;
}
  
  useEffect (() => {
    getPosts();
    getContacts();
  }, []);

  return (
    <MyContext.Provider value={{user: user, posts: posts, setPosts: setPosts, contacts: contacts, getInitials: getInitials }}>
      <div className='App'>
        <Header />
        <div className="container">
        <Sidebar/>
        <div className="content">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetails />}/>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile/:id" element={<ProfileForm />} />       
        </Routes>
        </div>
        </div>
      </div>
    </MyContext.Provider>
  )
}

export {App, MyContext} 
