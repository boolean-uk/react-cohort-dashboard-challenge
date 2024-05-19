/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "../../App";
import Avatar from "../Avatar";
import "./CommentForm.css";

export default function CommentForm({ postId, onSubmitNewComment }) {
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(MyContext);

  const handleTextChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleOnSubmit = () => {
    onSubmitNewComment({
      postId: postId,
      content: newComment,
      contactId: user.id,
    });
    setNewComment("");
  };
  return (
    <>
      <div className="new-comment-form">
        <Link to="/profile" state={{ user: user }}>
          <div className="comment-form-avatar-wrapper">
            <Avatar nameInitials={user.firstName[0] + "" + user.lastName[0]} />
          </div>
        </Link>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleTextChange}
          />
        </div>
        <div className="button-wrapper">
          <button className="post" onClick={handleOnSubmit}>
            comment
          </button>
        </div>
      </div>
    </>
  );
}
