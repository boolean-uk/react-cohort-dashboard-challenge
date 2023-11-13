import React from "react";
import { useState, useEffect } from "react";
import "./AddCommentInput.css";

function AddCommentInput(props) {
  const { combinedData, setCombinedData } = props;
  const { newComment, setNewcomment } = props;

  /*   const postNewComment = () => {
    const options = {
      METHOD: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    };
  }; */

  const submitcomment = (e) => {
    e.preventDefault();
    console.log(newComment);
  };

  const handleChange = (e) => {
    setNewcomment({
      ...combinedData,
      Comment: e.target.value,
    });
  };

  return (
    <form className="comment-input-box" onSubmit={(e) => submitcomment(e)}>
      <input
        type="text"
        placeholder="Add a comment..."
        onChange={handleChange}
      ></input>
      <button type="submit">
        <i class="fa-regular fa-paper-plane"></i>
      </button>
    </form>
  );
}

export default AddCommentInput;
