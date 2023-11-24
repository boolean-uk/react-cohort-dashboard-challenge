import React from "react";
import { useState, useEffect } from "react";
import "./AddCommentInput.css";

function AddCommentInput(props) {
  const { combinedData, setCombinedData } = props;
  const { newComment, setNewcomment, handleChange } = props;

  const submitcomment = (e) => {
    e.preventDefault();
    console.log(newComment);
  };

  return (
    <form className="comment-input-box" onSubmit={(e) => submitcomment(e)}>
      <input type="text" placeholder="Add a comment..."></input>
      <button type="submit">
        <i class="fa-regular fa-paper-plane"></i>
      </button>
    </form>
  );
}

export default AddCommentInput;
