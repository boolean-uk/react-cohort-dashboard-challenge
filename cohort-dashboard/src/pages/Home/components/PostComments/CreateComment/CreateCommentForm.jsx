import { useState } from "react";
import CreateCommentBtn from "./CreateCommentBtn";

export default function CreateCommentForm({ postId, setRefreshComments }) {
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

    if (newComment.content) {
      fetch(
        `https://boolean-api-server.fly.dev/yee0802/post/${postId}/comment`,
        opts
      )
        .then((res) => res.json())
        .then(() => {
          setNewComment(INITAL_STATE);
          setRefreshComments(true);
        });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    setNewComment({ ...newComment, content: e.target.value });
  };

  return (
    <>
      <form id="comment-form">
        <input
          className="comment-input input-p"
          placeholder="Add a new comment"
          type="text"
          name="content"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <CreateCommentBtn createComment={createComment} />
    </>
  );
}
