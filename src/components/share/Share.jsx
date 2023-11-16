import BlogList from './BlogsList';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileBadge from '../topbar/ProfileBadge';
import './share.css';

function Share() {

  const displayInitials = "JD"; // Replace this with your logic to get the initials
  const handleClick = () => {
    // Handle click logic here
  };

  

  return (
    <>
      <div className="sharetop">
        <div className="userlogo">
          <ProfileBadge initials={displayInitials} />
        </div>
        <span>
          <input className="inputbutton" placeholder="What's on your mind?" type="text" />
        </span>
        <button onClick={(e) => handleClick('Posted')} className="postbutton">
          Post
        </button>
      </div>
      <div className="blogup">
      <div>
        <BlogList />
      </div>
      <div className="bloglogo">
          <ProfileBadge initials={displayInitials} />
      </div>
        <span>
          <input className="commentbutton" placeholder="Add a comment...." type="text" />
          </span>
      </div>
    </>
  );
}

export default Share;
