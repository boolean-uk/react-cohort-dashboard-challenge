import React, { useState } from 'react'
import Comment from './Comment'

function CommentSection({ postId, comments = [], addComment }) {
  const [newCommentContent, setNewCommentContent] = useState('');

  const handleAddComment = () => {
    if (!newCommentContent.trim()) return;
    addComment(postId, 'New User', newCommentContent);
    setNewCommentContent('')
  }

  return (
    <div className="comment-section">
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            user={comment.user}
            content={comment.content}
          />
        ))}
      <div className="add-comment">
        <input
          type="text"
          value={newCommentContent}
          onChange={(e) => setNewCommentContent(e.target.value)}
        />
        <button onClick={handleAddComment}>Leave a comment</button>
      </div>
    </div>
  )
}

export default CommentSection
