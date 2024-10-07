import { useState, useContext } from "react";
import { AppContext } from "../App";
import "./Styling/NewCommentForm.css";

function getInitials(firstName, lastName) {
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
}

function NewCommentForm({ postId, onNewComment }) {
  const { user } = useContext(AppContext);
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;

    const newComment = {
      content,
      contactId: user.id,
      postId,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/josteinruen/post/${postId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const createdComment = await response.json();
        onNewComment(createdComment);
        setContent("");
      } else {
        console.error('Error creating comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  const initials = getInitials(user.firstName, user.lastName);

  return (
    <form className="new-comment-form" onSubmit={handleSubmit}>
      <div className="user-initials">{initials}</div>
        <label></label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default NewCommentForm;