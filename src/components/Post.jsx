import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';

function Post({ postId, user, content, comments = [], addComment }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="user-icon">{user.charAt(0)}</div>
        <div className="user-name">{user}</div>
      </div>
      <div className="post-content">{content}</div>
      <div className="comments">
        {comments && comments.map(comment => (
          <Comment
            key={comment.id}
            user={comment.user}
            content={comment.content}
          />
        ))}
      </div>
      <div className="add-comment">
        <input type="text" placeholder="Add a comment..." />
        <button onClick={() => addComment(postId, 'New User', 'New Comment')}>
          Send
        </button>
      </div>
      <div className="view-details">
        <Link to={`/post/${postId}`}>View Details</Link>
      </div>
    </div>
  );
}

export default Post;
