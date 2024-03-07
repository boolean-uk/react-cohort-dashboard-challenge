/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "../Body.css";
import { CommentContext } from "./Comments";

const INITIAL_COMMENT = {
  content: "",
};

export default function AddComment({ post }) {
  const { comments, setComments } = useContext(CommentContext);
  const [newComment, setNewComment] = useState({ content: "" });

  const handleFormChange = (event) => {
    const { value } = event.target;
    setNewComment({ ...newComment, content: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.content !== "" && newComment.content !== undefined) {
      newComment.postId = post.id;
      newComment.contactId = 1; // PLACEHOLDER ID
      fetch(
        `https://boolean-api-server.fly.dev/VictorAdamson/post/${post.id}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((jsonData) => {
          //If request is Ok
          setNewComment(jsonData);
          //Add the newly added comment to the original state
          console.log(newComment);
          setComments([...comments, newComment]);
          setNewComment(INITIAL_COMMENT);
        })
        .catch((err) => {
          //If request is bad
          console.log(err, "Error: comment could not be added!");
        });
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
          <button type="submit">-</button>
        </form>
      </div>
    </>
  );
}
