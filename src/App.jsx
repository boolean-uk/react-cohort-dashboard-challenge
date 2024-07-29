import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Profile from "./Profile";
import Post from "./Post";
import { PostAuthorProvider } from "./PostAuthorContext";
import "./App.css";

function App() {
  return (
    <PostAuthorProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PostAuthorProvider>
  );
}

export default App;
