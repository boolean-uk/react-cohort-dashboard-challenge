import { useState, useContext } from "react";
import { AppContext } from "../App";

function NewCommentForm({ postId }) {
  const [commentText, setCommentText] = useState("");

  const { addNewComment } = useContext(AppContext);

const handleCommentSubmit = async (event) => {
  event.preventDefault();
  if (!commentText.trim()) return;

  const newComment = { content: commentText, contactId: 1 };
  await addNewComment(postId, newComment); // This should update the context and cause a re-render
  setCommentText("");
};

  return (
    <form className="new-comment-form" onSubmit={handleCommentSubmit}>
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
