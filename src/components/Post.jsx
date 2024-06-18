// Post.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Comment from './Comment'

function Post({ postId, user, content, comments, addComment }) {
  const [commentUser, setCommentUser] = useState('');
  const [commentContent, setCommentContent] = useState('')

  const handleAddComment = () => {
    if (!commentUser || !commentContent) return
    addComment(postId, commentUser, commentContent)
    setCommentUser('')
    setCommentContent('')
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-icon">{user.charAt(0)}</div>
        <div className="user-name">{user}</div>
      </div>
      <div className="post-content">{content}</div>
      <div className="comments">
        {comments.map(comment => (
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
          placeholder="Your name"
          value={commentUser}
          onChange={(e) => setCommentUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <button onClick={handleAddComment}>Send</button>
      </div>
      <div className="view-details">
        <Link to={`/post/${postId}`}>View Details</Link>
      </div>
    </div>
  );
}

export default Post;
