import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.body}</p>
      <p>Author: {comment.authorInitials}</p>
    </div>
  );
};

export default Comment;