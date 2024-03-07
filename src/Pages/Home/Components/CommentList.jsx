import React, { useEffect, useState } from 'react'
import CreateComment from './CreateComment'
import CommentItem from './CommentItem'
import '../Home.css'

function CommentList({ postId }) {
  const URL = `https://boolean-api-server.fly.dev/thegrevling/post/${postId}/comment`
  const [comments, setComments] = useState([])
  const [showAllComments, setShowAllComments] = useState(false);


  const fetchComments = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [])

  const displayedComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <div className="comment-list-container">
      {displayedComments.map((comment, index) => (
        <CommentItem comment={comment} key={index} />
      ))}
      {comments.length > 3 && !showAllComments && (
        <div className="see-more-comments" onClick={() => setShowAllComments(true)}>
          See previous comments
        </div>
      )}
      <CreateComment fetchComments={fetchComments} postId={postId} />
    </div>
  );
}

export default CommentList