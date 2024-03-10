import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialCommentInfo = {
  content: "",
  contactId: 1,
};

function CreateComment({ post, fetchPosts }) {
  const [CommentInfo, setCommentInfo] = useState(initialCommentInfo);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const updatedCommentInfo = { ...CommentInfo, postId: post.id };
    fetch(
      `https://boolean-api-server.fly.dev/jacobchenjensen/post/${post.id}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCommentInfo),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        fetchPosts();
      })
      .catch((error) => {
        console.error("Error adding Comment:", error);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginLeft: "20px",
      }}
    >
      <br />
      <label htmlFor="Content">Add a comment:</label>
      <input
        type="text"
        id="content"
        name="content"
        onChange={(e) =>
          setCommentInfo((prevCommentInfo) => ({
            ...prevCommentInfo,
            content: e.target.value,
          }))
        }
        value={CommentInfo.content}
        required
      />
      <br />
      <br />
      <button type="submit">Create Comment</button>
    </form>
  );
}
export default CreateComment;
