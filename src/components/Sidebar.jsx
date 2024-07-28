import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/" className="sidebar-link">Home</Link>
      <Link to="/profile" className="sidebar-link">Profile</Link>
    </nav>
  );
}

export default Sidebar;
