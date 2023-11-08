import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Icons8 from "./assets/Icons8-logo.svg";
import homeImg from "./assets/home.svg"
import profileImg from "./assets/profile.svg"
import Profile from "./components/Profile"
import Home from "./components/Home"
import "./styles/App.css";

function App() {

  return (
    <div className="container">
     
      <header className="header">
        <img className="logo" src={Icons8} width={40} alt="logo"></img>
        <h1 className="h1">Cohort Manager</h1>
        <p className="initials">CH</p>
      </header>

      <main className="main-grid">

        <div className="left-menu">
          
          <div className="whole-logo">
          <img className="home-logo" src={homeImg} width={40} alt="home logo"></img>
          <Link to="/Home" className="home">Home</Link>
          </div>

          <div className="whole-profile">
          <img className="profile-logo" src={profileImg} width={40} alt="profile logo"></img>
          <Link to="/Profile" className="profile">Profile</Link>
          </div>
        </div>

        <div className="main-content">
        </div>
      </main>

      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
