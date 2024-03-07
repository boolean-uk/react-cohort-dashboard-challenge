import React from 'react';
import '../styles/Header.css';

export default function Header() {
    return (
      <header className="header-container">
        <div className="logo">
          {/* Your SVG goes here */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="white" d="M3.75,1A3.739,3.739,0,0,0,0,4.75v14.5A3.739,3.739,0,0,0,3.75,23.25h16.5A3.739,3.739,0,0,0,24,19.5V4.75A3.739,3.739,0,0,0,20.25,1ZM12,3h4.5V6.75H12Zm7.5,15H4.5V7.5h15ZM12,9h4.5v3.75H12ZM7.5,12h4.5v7.5H7.5Zm0,0"/>
          </svg>
        </div>
        <div className="title">Cohort Manager</div>
      </header>
    );
  }