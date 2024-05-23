import React from 'react';
import './Comment.css';

function Comment({ user, content }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="user-icon">{user.charAt(0)}</div>
        <div className="user-name">{user}</div>
      </div>
      <div className="comment-content">{content}</div>
    </div>
  );
}

export default Comment;
