import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserLogo from '../userlogo/UserLogo';
import Create from './Create';
import './share.css';

function Share() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
      <div className="sharetop">
        <div className="userlogo">
          <UserLogo />
        </div>
        <span>
          <input className="inputbutton" placeholder="What's on your mind?" type="text" />
        </span>
        <button onClick={(e) => handleClick()} className="postbutton">
          Post
        </button>
      </div>
      {/* Render the Create component */}
      <Create />
    </>
  );
}

export default Share;
