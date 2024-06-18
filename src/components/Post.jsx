import React, { useState } from 'react';
import Comment from './Comment';

function Post({ postId, user, content, comments = [], addComment }) {
  const [newCommentContent, setNewCommentContent] = useState('');

  const handleAddComment = () => {
    if (!newCommentContent.trim()) return;
    addComment(postId, 'New User', newCommentContent);
    setNewCommentContent('');
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-icon">{user && user.charAt(0)}</div>
        <div className="user-name">{user || 'User'}</div>
      </div>
      <div className="post-content">{content}</div>
      <div className="comments">
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              user={comment.user}
              content={comment.content}
            />
          ))}
      </div>
      <div className="add-comment">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newCommentContent}
          onChange={(e) => setNewCommentContent(e.target.value)}
        />
        <button onClick={handleAddComment}>Send</button>
      </div>
    </div>
  );
}

export default Post;
