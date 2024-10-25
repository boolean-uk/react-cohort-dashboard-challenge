import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed';
import PostPage from './pages/PostPage';
import './styles.css';  // Import the CSS file

const App = () => {
  return (
    <Router>
      <header>
        <h1>React Cohort Dashboard</h1>
      </header>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;