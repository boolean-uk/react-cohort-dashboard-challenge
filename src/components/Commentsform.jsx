// CommentForm.jsx
import React, { useState } from "react";

function CommentForm({ comment, onSubmitComment }) {
  const [inputComment, setInputComment] = useState(comment || ""); // Initialize with an empty string

  const handleInputChange = (e) => {
    setInputComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitComment(inputComment);
    setInputComment("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add a comment"
          value={inputComment}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default CommentForm;
