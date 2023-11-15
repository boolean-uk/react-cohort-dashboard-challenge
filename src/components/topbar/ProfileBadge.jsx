
import React from 'react';
import './profilebadge.css';

const ProfileBadge = ({ initials }) => {
  return (
    <div className="profileBadge">
      {initials}
    </div>
  );
};

export default ProfileBadge;
