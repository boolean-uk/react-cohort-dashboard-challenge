// ProfileInitialsBadge.jsx
import React from 'react';
import Badge from 'react-circle-badge';
import './ProfileInitialsBadge.css'; 

const ProfileInitialsBadge = ({ firstName, lastName }) => {
  const firstInitial = firstName ? firstName.charAt(0) : '';
  const lastInitial = lastName ? lastName.charAt(0) : '';

  const displayInitials = firstName && lastName ? `${firstInitial}${lastInitial}` : '';

  return (
    <Badge className="profileBadge" name={`${firstInitial}${lastInitial}`} />
  );
};

export default ProfileInitialsBadge;
