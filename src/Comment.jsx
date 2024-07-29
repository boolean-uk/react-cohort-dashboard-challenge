// Comment.jsx
import React, { useState } from "react";

function Comment({
  postId,
  setComments,
  currentUser,
  comments,
  expanded,
  onExpand,
}) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://boolean-uk-api-server.fly.dev/olaolumcpaul/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: comment, contactId: 1 }), // Assuming the contactId is 1 for simplicity
      }
    )
      .then((response) => response.json())
      .then((newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
        setComment("");
      })
      .catch((error) => console.error("Error adding comment:", error));
  };

  return (
    <div className="comment-form">
      <div className="comment-input-section">
        {currentUser && (
          <div className="current-user-icon">
            {currentUser.firstName[0]}
            {currentUser.lastName[0]}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <div className="comments">
        {comments &&
          (expanded ? comments : comments.slice(0, 3)).map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-author">
                <div className="author-initials">
                  {comment.contactId ? comment.contactId[0] : ""}
                </div>
                <p>{comment.body}</p> {/* Ensure comment body is rendered */}
              </div>
            </div>
          ))}
        {comments && comments.length > 3 && (
          <button onClick={onExpand}>
            {expanded ? "Hide comments" : "See previous comments"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Comment;
