// ProfileInitialsBadge.jsx
import React from 'react';
import './ProfileInitialsBadge.css';
import ProfileBadge from './ProfileBadge';

const ProfileInitialsBadge = ({ firstName, lastName }) => {
  const firstInitial = firstName ? firstName.charAt(0) : '';
  const lastInitial = lastName ? lastName.charAt(0) : '';
  const displayInitials = `${firstInitial}${lastInitial}`;

  return <ProfileBadge initials={displayInitials} />;
};

export default ProfileInitialsBadge;
