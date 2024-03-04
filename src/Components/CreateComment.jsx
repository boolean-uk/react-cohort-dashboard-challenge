import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { PostContext } from "./Post";

function CreateComment({ postId }) {
  const { loggedInUser } = useContext(AppContext);
  const { postComments, setPostComments } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const addNewComment = (event) => {
    event.preventDefault();
    setPostComments([
      ...postComments,
      {
        id: postComments.length + 1,
        user: loggedInUser.user,
        content: content,
      },
    ]);
    setContent("");
    setIsInputFocused(false);
  };

  return (
    <form onSubmit={addNewComment} className="createPost">
      <div className="input-group">
        <input
          type="text"
          value={content}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={isInputFocused ? "" : "Add a comment..."}
        />
      </div>
      <button className="btn" type="submit">
        Post
      </button>
    </form>
  );
}

export default CreateComment;
