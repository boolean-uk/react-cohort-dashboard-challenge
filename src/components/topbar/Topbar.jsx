// Topbar.jsx

import React from 'react';
import HeadLeftLogo from './HeadLeftLogo';
import ProfileInitialsBadge from './ProfileInitialsBadge';
import CircleBadge from './CircleBadge'; // Add this import statement
import './topbar.css';

const Topbar = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
  };

  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="headerlogo" style={{ display: 'inline-block', padding: '10px', borderRadius: '5px', height: '70'}}>
          <HeadLeftLogo />
        </span>
      </div>
      
      
      
      {}
      <div>
        <ProfileInitialsBadge firstName={user.firstName} lastName={user.lastName} />
      </div>
    </div>
  );
};

export default Topbar;
