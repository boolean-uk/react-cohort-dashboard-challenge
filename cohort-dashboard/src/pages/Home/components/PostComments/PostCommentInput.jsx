import { useState } from "react";
import UserProfileIcon from "../../../UserProfileIcon";

export default function PostCommentInput({ postId, setRefreshComments }) {
  const INITAL_STATE = {
    postId: postId,
    content: "",
    contactId: 1,
  };

  const [newComment, setNewComment] = useState(INITAL_STATE);

  const createComment = () => {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    };

    fetch(
      `https://boolean-api-server.fly.dev/yee0802/post/${postId}/comment`,
      opts
    )
      .then((res) => res.json())
      .then(() => {
        const form = document.getElementById("comment-form");

        setNewComment(INITAL_STATE);
        setRefreshComments(true);
        form.reset();
      });
  };

  const handleChange = (e) => {
    e.preventDefault();

    setNewComment({ ...newComment, content: e.target.value });
  };

  return (
    <div className="comment-input-container">
      <UserProfileIcon />
      <form id="comment-form">
        <input
          className="comment-input input-p"
          placeholder="Add a new comment"
          type="text"
          name="content"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <button className="comment-btn" onClick={createComment}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.6em"
          viewBox="0 0 448 512"
          fill="#fff"
        >
          <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
        </svg>
      </button>
    </div>
  );
}
