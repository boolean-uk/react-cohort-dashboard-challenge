import React, { useState } from "react";
import { MdSend } from "react-icons/md";

function CreateComment({postId, setComments, comments}) {
  const [commentContent, setCommentContent] = useState({
    postId: postId,
    content: "",
    contactId: 4,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCommentContent((prevData) => ({ ...prevData, [name]: value }));
  };

  const addNewComment = () => {
    fetch(
      `https://boolean-api-server.fly.dev/hannapham1007/post/${postId}/comment`,
      {
        method: "POST",
        body: JSON.stringify(commentContent),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
      window.location.reload();
    }).catch((error) => console.error("Error adding new comment", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewComment();
    setCommentContent({
      ...commentContent,
      content: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex', alignItems:'center', background:'var(--form-input-background)', borderRadius:'6px'}}>
          <label htmlFor="comment"></label>
          <textarea
            className="comment-input"
            name="content"
            type="text"
            id="comment"
            placeholder="Add a comment..."
            value={commentContent.content}
            onChange={handleChange}
          />
          <button type="submit" style={{ padding: "0 12px", background:'transparent'}}>
            <MdSend />
          </button>

        </div>
      </form>
    </div>
  );
}

export default CreateComment;
