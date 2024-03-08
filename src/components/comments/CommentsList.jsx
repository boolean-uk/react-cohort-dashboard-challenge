import { useState } from 'react';
import CommentsListItem from './CommentsListItem';

export default function CommentsList({ comments, post }) {
  const [showAllComments, setShowAllComments] = useState(false);

  const toggleShowComments = () => {
    setShowAllComments(!showAllComments);
  };

  return (
    <div className='commentSection'>
        {!showAllComments && comments.length > 3 && (
        <div className='showComments'>
          <h3 onClick={toggleShowComments}>See previous comments</h3>
        </div>
      )}
      {comments.slice(showAllComments ? 0 : comments.length - 3, comments.length).map((comment, index) => (
          <CommentsListItem key={index} comment={comment} post={post} />
      ))}
    </div>
  );
}
