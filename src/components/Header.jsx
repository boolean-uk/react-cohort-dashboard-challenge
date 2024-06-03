// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const Header = () => {
  return (
    <header>
      <div className="title-header primary-color">
        <ReactSVG src="path/to/title-header.svg" />
      </div>
      <nav>
        <Link to="/">
          <div className="home-icon secondary-color">
            <ReactSVG src="path/to/home-icon.svg" />
          </div>
        </Link>
        <Link to="/profile">
          <div className="profile-icon secondary-color">
            <ReactSVG src="path/to/profile-icon.svg" />
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;