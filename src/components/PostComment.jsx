import { useState } from 'react';
import Avatar from './Avatar';

function PostComment({ authorName, favouriteColour, onAddComment }) {
  const [commentContent, setCommentContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentContent.trim()) {
      onAddComment(commentContent);
      setCommentContent('');
    }
  };

  return (
    <div className="postcomment-container">
      <Avatar name={authorName} favouriteColour={favouriteColour} />
      <form className='commentform' onSubmit={handleSubmit}>
        <input
          type="text"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add a comment..."
          className="postcomment-input"
        />
        <button type="submit" className="postcomment-button">Comment</button>
      </form>
    </div>
  );
}

export default PostComment;
