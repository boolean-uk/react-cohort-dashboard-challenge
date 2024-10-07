import React from 'react';
import "../styles/Avatar.css";
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../App';

function Avatar({ userId, firstName, lastName, favouriteColour }) {
  const { user } = useContext(UserContext);

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const avatarContent = (
    <div className="avatar-circle" style={{ backgroundColor: favouriteColour }}>
      <span className="avatar-initials">
        {getInitials(firstName, lastName)}
      </span>
    </div>
  );

  return  (
    <Link to={`/profile/${userId}`} >
      {avatarContent}
    </Link>
  )
}


export default Avatar;