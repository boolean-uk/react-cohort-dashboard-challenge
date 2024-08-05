import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { PostsProvider } from "./context/PostsContext";

const App = () => {
  return (
    <PostsProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
};

export default App;
