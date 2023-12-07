
import React, { useState, useEffect } from 'react';
import ProfileBadge from '../topbar/ProfileBadge';
import UserLogo from '../userlogo/UserLogo';
import Create from './Create';
import './share.css';

function Share() {
  const displayInitials = "JD"; // Replace this with your logic to get the initials

  const handleClick = () => {
    // Handle click logic here
    console.log('Button clicked!');
  };

  return (
    <div className="share-container">
      <div className="sharetop">
        <div className="userlogo">
        
          <UserLogo />
        </div>
        <div className="input-container">
          <input className="inputbutton" placeholder="What's on your mind?" type="text" />
          <button onClick={handleClick} className="postbutton">
            Post
          </button>
        </div>
      </div>
      <div className="blogup">
        <div>
      
        </div>
        <div className="bloglogo">
          <ProfileBadge initials={displayInitials} />
        </div>
        <div className="comment-container">
          <input className="commentbutton" placeholder="Add a comment...." type="text" />
        </div>
      </div>
      {/* Render the Create component */}
      <Create />
    </div>
  );
}

export default Share;
