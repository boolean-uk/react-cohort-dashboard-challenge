import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PostDetail from './PostDetail';
import Profile from './Profile';
import './App.css';

import HomeTitle from './assets/home-icon.svg';
import ProfileIcon from './assets/profile-icon.svg'; 
import TitleHeader from './assets/title-header.svg';

function App() {
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Walker',
  });

  // Generate initials based on profileData
  const initials = `${profileData.firstName.charAt(0)}${profileData.lastName.charAt(0)}`;

  return (
    <Router>
      <div className="layout">
        <header className="header">
          <div className="header-title">
            <img src={TitleHeader} alt="Title Header" />
          </div>
          <div className="profile-initials">
            <div className="profile-initials-logo">{initials}</div>
          </div>
        </header>
        <div className="main-content">
          <aside className="sidebar">
            <nav>
              <ul>
                <center><li><a href="/"><img src={HomeTitle} alt="Home" /> Home</a></li></center>
                <center><li><a href="/profile"><img src={ProfileIcon} alt="Profile" /> Profile</a></li></center>
              </ul>
            </nav>
          </aside>
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;





