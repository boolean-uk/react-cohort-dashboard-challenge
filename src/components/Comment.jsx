import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-avatar">
          <span>{comment.user?.name.charAt(0)}</span>
        </div>
        <div>
          <h5>{comment.user?.name}</h5>
        </div>
      </div>
      <div className="comment-body">
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment;
