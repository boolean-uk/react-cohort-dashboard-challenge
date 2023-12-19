/* eslint-disable react/prop-types */
import  { useState } from "react";
import Composecommentbutton from "./Composecommentbutton.jsx"

export default function Composecommentform({
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

  const getComment = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    };

    if (commentData.content) {
      fetch(`${API_BASE_URL}/Elizabethcodes44/post/${postId}/comment`, options)
        .then((response) => response.json())
        .then(() => {
          const form = document.querySelector("#commentform");

          setCommentData(INITIAL_STATE);
          setShouldReloadComments(true);

          form.reset();
        });
    }
  };

  const handleChange = (event) => {
    event.preventDefault();

    setCommentData({ ...commentData, content: event.target.value });
  };

  return (
    <>
      <form id="commentform">
        <input
          className="commentinput inputp"
          placeholder="Add a comment"
          type="text"
          name="content"
          onChange={handleChange}
        />
      </form>
      <Composecommentbutton getComment={getComment} />
    </>
  );
}