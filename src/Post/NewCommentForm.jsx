import { useState, useContext } from "react";
import { AppContext } from "../App";

function NewCommentForm({ postId }) {
  const [commentText, setCommentText] = useState("");

  const { addNewComment } = useContext(AppContext);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!commentText.trim()) return;

    const newComment = { text: commentText, postId };

    await addNewComment(postId, newComment);
    setCommentText("");
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write a comment..."
        required
      />
      <button type="submit">Comment</button>
    </form>
  );
}

export default NewCommentForm;
