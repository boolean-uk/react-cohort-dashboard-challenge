// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="title-header">
        {/* Add the title header SVG */}
      </div>
      <nav>
        <Link to="/">
          <div className="home-icon">
            {/* Add the home icon SVG */}
          </div>
        </Link>
        <Link to="/profile">
          <div className="profile-icon">
            {/* Add the profile icon SVG */}
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;