import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function CreatePost() {
  const { posts, setPosts, loggedInUser } = useContext(AppContext);

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const addNewPost = (event) => {
    event.preventDefault();
    if (content.trim() !== "" && title.trim() !== "") {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          title: title,
          content: content,
          user: loggedInUser.user,
          comments: [],
        },
      ]);
      setContent("");
      setTitle("");
      setIsInputFocused(false);
    }
  };

  return (
    <form onSubmit={addNewPost} className="createPost">
      <div className="input-group">
        <input
          type="text"
          value={content}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={isInputFocused ? "" : "What's on your mind?"}
        />
        {isInputFocused && (
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            onFocus={handleInputFocus}
            placeholder="Post Title"
          />
        )}
      </div>
      <button className="btn" type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
