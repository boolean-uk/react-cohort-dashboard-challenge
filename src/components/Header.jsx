import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Cohort Manager</h1>
      <div className="user-initials">
        <Link to="/profile">AW</Link>
      </div>
    </header>
  );
}

export default Header;
