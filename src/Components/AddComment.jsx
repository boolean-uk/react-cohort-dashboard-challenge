import { useState } from "react";

function AddComment({ postId, comments, setComments }) {
  const [content, setContent] = useState("");

  const handleAddComment = () => {
    if (!content.trim()) return;
    postId = Number(postId);

    const data = {
      postId,
      content,
      contactId: 1,
    };
    console.log("DATA", data);

    fetch(
      `https://boolean-api-server.fly.dev/ps975076/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("comment", data);
        setComments([...comments, data]);
        setContent("");
      });
  };

  return (
    <div className="addAComment">
      <div className="userInitialsComment">
        <p>AW</p>
      </div>
      <div className="commentInput">
        <input
          className="inputAComment"
          placeholder="Add a comment..."
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="commentButton">
        <button onClick={handleAddComment}>
          <img src="src/assets/send-svgrepo-com.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddComment;
