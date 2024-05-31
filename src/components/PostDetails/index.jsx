/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { MyContext } from "../../App";
import Post from "../Post";
import Comments from "../Comments";
import CommentForm from "../CommentForm";

export default function PostDetails({ post }) {
  const { state } = useLocation();
  post = state.post;

  const { handleNewComment } = useContext(MyContext);

  return (
    <div className="post-details">
      <div className="post-wrapper">
        <Post post={post} />
        <div className="comments">
          <Comments postId={post.id} limit={300} />
        </div>
        <div className="comment-form-wrapper">
          <CommentForm postId={post.id} onSubmitNewComment={handleNewComment} />
        </div>
      </div>
    </div>
  );
}
