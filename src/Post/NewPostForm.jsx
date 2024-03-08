import { useState, useContext } from "react";
import { AppContext } from "../App";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNewPost } = useContext(AppContext);

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = { title, content, contactId: 1 };
    await addNewPost(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handlePostSubmit} className="new-post-form">
      <div className="form-group">
        <label htmlFor="postTitle">Title</label>
        <input
          id="postTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title of your post"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default NewPostForm
