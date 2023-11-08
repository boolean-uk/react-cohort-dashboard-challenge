import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Icons8 from "./assets/Icons8-logo.svg";
import home from "./assets/home.svg"
import profile from "./assets/profile.svg"
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
          <img className="home-logo" src={home} width={40} alt="home logo"></img>
          <div className="home">Home</div>
          <img className="profile-logo" src={profile} width={40} alt="profile logo"></img>
          <div className="profile">Profile</div>
        </div>

        <div className="main-content">

        </div>
      </main>
    </div>
  );
}

export default App;
