// src/components/AuthorInfo.js
import React from 'react';

const AuthorInfo = ({ author }) => {
  const getInitials = (name) => {
    const [firstName, lastName] = name.split(' ');
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  return (
    <div className="author-info">
      <div className="author-initials">{getInitials(author.name)}</div>
      <div className="author-name">{author.name}</div>
    </div>
  );
};

export default AuthorInfo;