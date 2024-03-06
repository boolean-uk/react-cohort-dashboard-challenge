import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import cmlogo from './assets/title-header.svg';
import homeLogo from './assets/home-icon.svg';
import profileLogo from './assets/profile-icon.svg';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]); 
  const [contacts, setContacts] = useState([])


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
            
            <div className="rounded-box yellow">
              <textarea placeholder="What are you thinking?"></textarea> <br></br>
              <button>Submit</button>
            </div>

            <div className="rounded-post">
              <Posts posts={posts} setPosts={setPosts}/>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
