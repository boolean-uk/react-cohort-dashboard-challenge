import React from 'react';
import { useState, useEffect, createContext } from 'react';
import './App.css';
import cmlogo from './assets/title-header.svg';
import homeLogo from './assets/home-icon.svg';
import profileLogo from './assets/profile-icon.svg';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

const MyContext = createContext()


function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [postUsers, setPostUsers] = useState([]);
  const [commentUsers, setCommentUsers] = useState([]);


  const getInitials = (user) => {
    if (user) {
      const firstName = user.firstName || '';
      const lastName = user.lastName || '';
      return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    }
    return '';
  };

  const fetchUserInfo = async (contactId) => {
    const response = await fetch(`https://boolean-api-server.fly.dev/hassanhussa1n/contact/${contactId}`);
    const userData = await response.json();
    

    userData.initials = getInitials(userData);
  
    return userData;
  };
  
  
  
  

  useEffect(() => {
    const fetchData = () => {
      fetch("https://boolean-api-server.fly.dev/hassanhussa1n/post")
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
    }

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = () => {
      fetch("https://boolean-api-server.fly.dev/hassanhussa1n/contact")
      .then(response => response.json())
      .then(data => {
        setContacts(data)
      })
    }

    fetchData();
  }, []);
   
  console.log(contacts)
  console.log(posts)

  


  return (
    <>
    
      <div className="container">
        <header className="header blue">
        
          <div className="logo-container">
            <img src={cmlogo} alt="Cohort Manager Logo" className="logo" />
            <h3 className='skada'>Cohort Manager</h3>
          </div>
        </header>
        <div className="container-nav-main">
          <nav className="sidebar red">
           
            <button className="nav-button">
              <img src={homeLogo} alt="Home" /> 
              Home
            </button>
            <button className="nav-button">
              <img src={profileLogo} alt="Profile" />
              Profile
            </button>
          </nav>
          <main className="main green">
            <MyContext.Provider value={{ posts, setPosts, postUsers, commentUsers }}>
              <CreatePost />
              <Posts/>
              
            </MyContext.Provider>

          </main>
        </div>
      </div>
    </>
  );
}

export {App, MyContext};
