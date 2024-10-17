import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost';
import Postfeed from './components/Postfeed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostItem from './components/PostItem';



export const AppContext = createContext();

export default function App() {

  const [posts, setPosts] = useState([]);
  const [postWithUserData, setPostWithUserData] = useState([]);
  const [contacts, setContacts] = useState([]);
    
  

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const responsepdata = await fetch('https://boolean-uk-api-server.fly.dev/alihaiderkhannn/post')
        const jsondata = await responsepdata.json();
       // console.log(JSON.stringify(jsondata, null, 2))
        setPosts(jsondata);
      }
      catch(error) {
        console.error("Error fetching the posts:", error)
      }
    }
    fetchposts();
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;

    const fetchContacts = async () => {
      try {
        const updatedPosts = await Promise.all(posts.map(async (post) => {
          const response = await fetch(`https://boolean-uk-api-server.fly.dev/alihaiderkhannn/contact/${post.contactId}`);

          if (!response.ok) {
            throw new Error(`Failed to fetch contact with ID ${post.contactId}`);
          }

          const data = await response.json();
          return {
            ...post,
            firstName: data.firstName,
            lastName: data.lastName,
            favouriteColour: data.favouriteColour,
          };
        }));

        setPostWithUserData(updatedPosts); 
      } catch (error) {
        console.error("Error fetching the contacts:", error);
      }
    };

    fetchContacts();
  }, [posts]); 

  // console.log(JSON.stringify(posts, null, 2));


  return (
    
    <Router>

      <AppContext.Provider value={{ posts, postWithUserData, setPostWithUserData, setPosts, contacts, setContacts}}>
      <Header />
      <div className='main-content'>
        <Sidebar />
        <div className='post-feed-container'>
          <CreatePost />

          <Postfeed />
          
          
          
          
        </div>
        

      </div>
      </AppContext.Provider >

      </Router>
     
      
    
  )
}



