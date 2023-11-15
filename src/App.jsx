import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProfileView from './views/ProfileView'
import Header from './components/Header'
import Footer from './components/Footer'
import PostView from './views/PostView'
import Home from './views/Home'
import './App.css'

function App() {

  const [currentTab, setCurrentTab] = useState("home");

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <>
      <div className="App">
        <Header currentTab={currentTab} setCurrentTab={handleTabChange} />
        <main className='main'>
          <Routes>
            <Route exact path="/" element={currentTab === 'home' ? <Home /> : <ProfileView />} />
            <Route path="/profile/:id" element={<ProfileView />} />
            <Route path="/posts/:id" element={<PostView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;