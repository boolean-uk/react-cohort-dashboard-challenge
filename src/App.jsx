import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import PostFeed from "./components/Post/PostFeed";
import SinglePost from "./components/Post/SinglePost";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import UpdatePostForm from "./components/Post/UpdatePostForm";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="container-nav-main">
          <Sidebar />
          <main className="main green">
            <Routes>
              <Route exact path="/" element={<PostFeed />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/profile/:id?" element={<Profile />} />
              <Route path="/post/:id/update" element={<UpdatePostForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
