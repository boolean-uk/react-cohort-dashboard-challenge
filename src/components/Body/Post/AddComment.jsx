/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "../Body.css";
import { CommentContext } from "./Post";
import { PostContext } from "../../../App";

const INITIAL_COMMENT = {
  title: "",
  content: "",
};

export default function AddComment({ post }) {
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
      newComment.postId = post.id;
      newComment.contactId = 2; // PLACEHOLDER ID
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
          setComments([...comments, newComment]);
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
          <button type="submit">I-</button>
        </form>
      </div>
    </>
  );
}
