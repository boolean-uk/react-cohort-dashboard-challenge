import { useEffect, useState } from 'react';
import AddCommentForm from './AddCommentForm';
import AuthorCircle from './AuthorCircle';

function Comments({ postId }) {
  const [comments, setComments] = useState(null);
  const [visibleComments, setVisibleComments] = useState(3);
  
  const handleShowMore = () => {
    setVisibleComments(comments.length);
  };

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/agrmet/post/${postId}/comment`)
      .then((rs) => rs.json())
      .then(setComments);
  }, [comments]);

  if (!comments) {
    return <div>Loading...</div>;
    
  }

  return (
    <div className="comments-section">
      {comments.slice(0, visibleComments).map((comment, i) => (
        <div key={i}>
          <AuthorCircle authorId={comment.contactId} />
          {comment.content}
          </div>
      ))}
      {comments.length > 3 && <button onClick={handleShowMore}>See previous comments</button>}
      <AddCommentForm postId={postId} />
    </div>
  );
}

export default Comments;
