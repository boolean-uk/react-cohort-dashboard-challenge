import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react";
import Post from "./Posts/Post";
import Header from "./Header/Header";
import React from "react";
import Navigation from "./Navigation/Navigation";
import ContactId from "./Header/ContactId";
import InputAndButton from "./MakePost/InputAndButton";
import MakePost from "./MakePost/MakePost";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
     <MakePost/>
      </div>

      <div className="navigation">
        <Navigation />
      </div>

      <div className="make-post">
         <InputAndButton/>
      </div>

      <div className="post">
        <Post />
      </div>
      
     
    </div>
  );
}

export default App;
