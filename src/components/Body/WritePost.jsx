import { useContext, useState } from "react";
import { PostContext } from "../../App.jsx";
import "./Body.css";

const INITIAL_POST = {
  title: "",
  content: "",
};

export default function WritePost() {
  const { posts, setPosts } = useContext(PostContext);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleFormChange = (event) => {
    const { value } = event.target;
    setNewPost({ ...newPost, content: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewPost(INITIAL_POST);
    if (newPost.content !== "" && newPost.content !== undefined) {
      setPosts([...posts, newPost]);
      console.log(newPost);
    } else {
      console.log("Can't create empty post!");
    }
  };

  return (
    <>
      <div className="post-box">
        <form onSubmit={handleSubmit}>
          <label className="profile-icon">VA</label>
          <input
            type="text"
            placeholder="What's on your mind...?"
            className="form-input"
            value={newPost.content}
            onChange={handleFormChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}
