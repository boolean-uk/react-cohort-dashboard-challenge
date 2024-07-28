import React, { useState } from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  const [showAll, setShowAll] = useState(false);

  const displayedComments = showAll ? comments : comments.slice(0, 3);

  return (
    <div className="comment-list">
      {displayedComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      {comments.length > 3 && (
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show less" : "See previous comments"}
        </button>
      )}
    </div>
  );
}

export default CommentList;
