import { useState } from 'react';
import CommentsListItem from './CommentsListItem';

export default function CommentsList({ comments, post }) {
  const [showAllComments, setShowAllComments] = useState(false);

  const toggleShowComments = () => {
    setShowAllComments(!showAllComments);
  };

  return (
    <div>
      {comments.slice(0, showAllComments ? comments.length : 3).map((comment, index) => (
        <CommentsListItem key={index} comment={comment} post={post} />
      ))}
      {!showAllComments && comments.length > 3 && (
        <button onClick={toggleShowComments}>Show rest of comments</button>
      )}
    </div>
  );
}
