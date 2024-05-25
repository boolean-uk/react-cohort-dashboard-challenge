// Post.jsx

import React from 'react';
import CommentSection from './CommentSection';

function Post({ user, content, children }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="user-icon">{user.charAt(0)}</div>
        <div className="user-name">{user}</div>
      </div>
      <div className="post-content">{content}</div>
      {children}
      <div className="add-comment">
        <input type="text" placeholder="Add a comment..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Post;
