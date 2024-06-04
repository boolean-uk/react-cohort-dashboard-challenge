// src/components/Comment.js
import React from 'react';
import AuthorInfo from './AuthorInfo';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <AuthorInfo author={comment.author} />
      <div className="comment-content">{comment.content}</div>
    </div>
  );
};

export default Comment;