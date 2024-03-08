import { useState, useContext, useEffect } from "react";
import CommentItem from "./CommentItem";
import { AppContext } from "../App";
import { fetchComments } from "../API/api";

function CommentList({ postId}) {
  const { posts } = useContext(AppContext);
  const postComments = posts.find((post) => post.id === postId)?.comments || [];
  const [showAllComments, setShowAllComments] = useState(false);

  // Determine which comments to display based on the showAllComments state
  const visibleComments = showAllComments
    ? postComments
    : postComments.slice(0, 3);

  return (
    <div className="comment-list">
      {postComments.length > 3 && (
        <div className="comment-list-div"onClick={() => setShowAllComments(!showAllComments)}>
          {showAllComments ? "Hide previous comments" : "See previous comments"}
        </div>
      )}
      {visibleComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      {/* Toggle button visibility based on the number of comments */}
    </div>
  );
}

export default CommentList;
