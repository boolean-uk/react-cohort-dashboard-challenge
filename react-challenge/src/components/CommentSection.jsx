import React from 'react';
import './CommentSection.css';

function CommentSection({ children }) {
  return (
    <div className="comment-section">
      {children}
    </div>
  );
}

export default CommentSection;