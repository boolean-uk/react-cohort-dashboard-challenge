/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CommentContext } from "./App";
import Comment from "./Comment";

function CommentsList({ postId, focus }) {
  const commentsContext = useContext(CommentContext);
  const { comments } = commentsContext;
  const [postComments, setPostComments] = useState([]);
  const [allComments, setAllComents] = useState(false);

  function onChange() {
    setAllComents(!allComments);
  }
  useEffect(() => {
    setPostComments(comments.filter((comment) => comment.postId == postId));
  }, [comments, postId]);
  if (postComments.length > 3 && !focus) {
    if (allComments) {
      return (
        <div>
          <div className="toggle-comments">
            <span onClick={onChange}>Less comments</span>
          </div>
          {postComments.slice().reverse().map((comment) => {
            return (
              <div key={comment.id}>
                <Comment comment={comment} postId={postId} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <div className="toggle-comments">
            <span onClick={onChange}>More comments</span>
          </div>
          {postComments.slice().reverse().slice(0, 3).map((comment) => {
            return (
              <div key={comment.id}>
                <Comment comment={comment} postId={postId} />
              </div>
            );
          })}
        </div>
      );
    }
  } else {
    return postComments.slice().reverse().map((comment) => {
      return (
        <div key={comment.id}>
          <Comment comment={comment} postId={postId} />
        </div>
      );
    });
  }
}
export default CommentsList;
