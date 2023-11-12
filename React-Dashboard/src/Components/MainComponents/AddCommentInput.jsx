import React from "react";
import { useState, useEffect } from "react";
import "./AddCommentInput.css";

function AddCommentInput(props) {
  /*   const INITIAL_COMMENTS = {
    postId: postId,
    content: "",
    contactId: contactId,
  };

  const { comment, setCommentState } = props;
  //const [newCommentData, setNewCommentData] = useState(INITIAL_COMMENTS);
  const [newComment, setNewcomment] = useState(INITIAL_COMMENTS);

  const postComment = () => {
    const options = {
      METHOD: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    };
  }; */

  return (
    <form className="comment-input-box">
      <input
        type="text"
        placeholder="Add a comment..."
        /*  onChange={(e) => setNewcomment({...newComment, })} */
      ></input>
      <i class="fa-regular fa-paper-plane"></i>
    </form>
  );
}

export default AddCommentInput;
