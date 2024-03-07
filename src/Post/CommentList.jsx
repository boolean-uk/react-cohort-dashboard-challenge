import { useState, useEffect } from "react";
import { fetchComments } from "../API/api";
import CommentItem from "./CommentItem";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    const fetchAndSetComments = async () => {
      try {
        const fetchedComments = await fetchComments(postId);
        setComments(fetchedComments);
      } catch (error) {
        console.error(`Error fetching comments for post ${postId}:`, error);
      }
    };

    fetchAndSetComments();
  }, [postId]);

  const visibleComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <div className="comment-list">
      {visibleComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      {comments.length > 3 && (
        <button onClick={() => setShowAllComments(!showAllComments)}>
          {showAllComments ? "Hide comments" : "See previous comments"}
        </button>
      )}
    </div>
  );
}

export default CommentList;
