import React from "react";
import { useState, useEffect } from "react";
import "./AddComment.css";

function AddComment(props) {
  const { combinedData, setCombinedData } = props;
  const { newComment, setNewcomment, handleChange } = props;

  const submitcomment = (e) => {
    e.preventDefault();
    console.log(newComment);
  };

  return (
    <form className="comment-input-box" onSubmit={(e) => submitcomment(e)}>
      <input
        type="text"
        placeholder="Add a comment..."
        onChange={handleChange}></input>
      <button type="submit">
        <i className="fa-regular fa-paper-plane"></i>
      </button>
    </form>
  );
}

export default AddComment;