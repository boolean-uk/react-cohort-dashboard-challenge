/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import "./style/Post.css";
import CircleAvatar from "./CircleAvatar";
import { useContext, useState } from "react";
import CommentsList from "./CommentsList";
import { ActiveContext, CommentContext, PostContext } from "./App";

function PostListItem({ post, user }) {
  const activeContext = useContext(ActiveContext);
  const commentContext = useContext(CommentContext);
  const postContext = useContext(PostContext);
  const [comment, setComment] = useState("");
  const { active } = activeContext;
  const { createComment } = commentContext;
  const { deletePost } = postContext;
  const navigate = useNavigate()

  function onSubmit() {
    const com = { postId: post.id, content: comment, contactId: active.id };
    createComment(com, post.id);
    setComment("")
  }
  function onDelete() {
    deletePost(post.id);
  }
  function onEdit(){
navigate(`/post/${post.id}/edit`)
  }
  if (user && post && active) {
    return (
      <div className="post">
        <div className="post-header">
          <div className="post-avatar">
            <Link to={`/profile/${user.id}`}>
              <CircleAvatar
                backgroundColor={user.favouriteColour}
                initials={user.firstName.charAt(0) + user.lastName.charAt(0)}
              />
            </Link>
          </div>
          <div className="post-header-text">
          <Link to={`/profile/${user.id}`}>
            <h4>{user.firstName + " " + user.lastName}</h4>
            </Link>
            <Link to={`/post/${post.id}`}>
              <p>{post.title}</p>
            </Link>
          </div>
          <div>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </div>
        <p>{post.content}</p>
        <hr />
        <CommentsList postId={post.id} />
        <div className="comment">
          {active.firstName && active.lastName && (
            <CircleAvatar
              backgroundColor={active.favouriteColour}
              initials={active.firstName.charAt(0) + active.lastName.charAt(0)}
            />
          )}
          <input
            value={comment}
            placeholder="Comment..."
            onChange={(e) => setComment(e.target.value)}
          ></input>
          <button className="submit-button" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
  return <></>;
}
export default PostListItem;
