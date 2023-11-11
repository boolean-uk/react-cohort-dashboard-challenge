import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react";
import Post from "./Posts/Post";
import Header from "./Header/Header";
import React from "react";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>

      <div className="navigation">
        <Navigation />
      </div>

      <div className="make-post">
         <h1>HELLO WORLD</h1>
      </div>

      <div className="post">
        <Post />
      </div>
    </div>
  );
}

export default App;
