import { useContext, useState } from "react";
import "../Body.css";
import { CommentContext } from "./Post";

const INITIAL_COMMENT = {
  title: "",
  content: "",
};

export default function AddComment() {
  const { comments, setComments } = useContext(CommentContext);
  const [newComment, setNewComment] = useState({ title: "", content: "" });

  const handleFormChange = (event) => {
    const { value } = event.target;
    setNewComment({ ...newComment, content: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setNewComment(INITIAL_COMMENT);
    if (newComment.content !== "" && newComment.content !== undefined) {
      setComments([...comments, newComment]);
      console.log(newComment);
    } else {
      console.log("Can't create empty comment!");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="profile-icon">VA</label>
          <input
            type="text"
            placeholder="Add a comment..."
            className="comment-input"
            value={newComment.content}
            onChange={handleFormChange}
          />
          <button type="submit">I-</button>
        </form>
      </div>
    </>
  );
}
