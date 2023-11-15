import { useState } from "react";
import arrow from "../../../assets/arrow-icon.svg";
import { useNavigate } from "react-router-dom";

function CommentForm({ root, post, setComments, loggedInUser }) {
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate("/");
  const newCommentUser = {
    id: "",
    postId: post.id,
    contactId: loggedInUser.id,
    content: newComment,
  };
  const fetchNewComment = () => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCommentUser),
    };
    fetch(`${root}/post/${post.id}/comment`, options)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchNewComment();
    newComment("");
    navigate;
  };
  return (
    <form className="new-comment" onSubmit={handleSubmit}>
      <label htmlFor="new-comment" className="new-comment--label">
        <input
          type="text"
          id="new-comment"
          className="new-comment--input"
          name="new-comment"
          placeholder="Add a comment"
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        />
        <button type="submit" className="comment-submit--button">
          <img src={arrow} alt="arrow-button" width={20} />
        </button>
      </label>
    </form>
  );
}

export default CommentForm;
