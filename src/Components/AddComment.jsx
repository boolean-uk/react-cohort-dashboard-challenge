import { useState } from "react";

function AddComment({ handleAddComment }) {
  const [content, setContent] = useState("");

  const addComment = () => {
    handleAddComment(content);
    setContent("");
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
        <button onClick={addComment}>
          <img src="src/assets/send-svgrepo-com.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddComment;
