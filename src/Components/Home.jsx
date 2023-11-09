import { useState, useEffect, Routes, Route} from 'react'
import Profile from "./Profile";
import PostButton from "./PostButton";
import PostsDisplay from "./PostsDisplay";
import PostPage from "./PostPage";
import Logo from "../assets/Logo.svg";
import HomePic from "../assets/HomePic.svg";
import ProfilePic from "../assets/ProfilePic.svg";
import "../App.css";

export default function Home() {
    return (
      <div className="parent">
        <header className="header">
          <img className="logo" src={Logo} alt="Logo" />
          <h1>Cohort Manager</h1>
          <div className="user-badge">JM</div>
        </header>
        <div className="left-menu">
          <div className="menu-item">
            <img className="HomePic" src={HomePic} alt="HomePic" />
            <p>Home</p>
          </div>
          <div className="menu-item">
            <img className="profile-icon" src={ProfilePic} alt="Profile" />
            <p>Profile</p>
          </div>
        </div>
        <div className="main-content">
        <PostsDisplay />
        </div>
      </div>
    );
  }
  
