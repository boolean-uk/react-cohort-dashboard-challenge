import React, { useState } from 'react';
import Comment from './Comment';

function CommentSection({ postId, comments, addComment }) {
  const [newCommentUser, setNewCommentUser] = useState('')
  const [newCommentContent, setNewCommentContent] = useState('')

  const handleAddComment = () => {
    if (!newCommentUser || !newCommentContent) return
    addComment(postId, newCommentUser, newCommentContent)
    setNewCommentUser('')
    setNewCommentContent('')
  };

  return (
    <div className="comment-section">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          user={comment.user}
          content={comment.content}
        />
      ))}
      <div className="add-comment">
        <input
          type="text"
          placeholder="Your name"
          value={newCommentUser}
          onChange={(e) => setNewCommentUser(e.target.value)}
        />
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

export default CommentSection;
