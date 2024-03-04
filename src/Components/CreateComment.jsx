import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function CreateComment({ postId }) {
  const { posts, setPosts, loggedInUser } = useContext(AppContext);

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
    if (content.trim() !== "") {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                id: post.comments.length + 1,
                user: loggedInUser.user,
                content: content,
              },
            ],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setContent("");
      setIsInputFocused(false);
    }
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
