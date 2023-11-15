import React, { useState } from "react";
import GenerateCommentButton from "./GenerateCommentButton";

export default function CreateCommentForm({
  postId,
  setShouldReloadComments,
  API_BASE_URL,
}) {
  const INITIAL_STATE = {
    postId: postId,
    content: "",
    contactId: 1,
  };

  const [commentData, setCommentData] = useState(INITIAL_STATE);

  const generateComment = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    };

    if (commentData.content) {
      fetch(`${API_BASE_URL}/Hayor4real/post/${postId}/comment`, options)
        .then((response) => response.json())
        .then(() => {
          const form = document.querySelector("#comment__form");

          setCommentData(INITIAL_STATE);
          setShouldReloadComments(true);

          form.reset();
        });
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();

    setCommentData({ ...commentData, content: event.target.value });
  };

  return (
    <>
      <form id="comment__form">
        <input
          className="comment__input input__p"
          placeholder="Add a new comment here"
          type="text"
          name="content"
          onChange={handleInputChange}
        />
      </form>
      <GenerateCommentButton generateComment={generateComment} />
    </>
  );
}
