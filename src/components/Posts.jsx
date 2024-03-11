import { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { Link } from "react-router-dom";

const Posts = () => {
  const { posts, createPost } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={post.authorProfilePicture}
                alt="Author"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <h3>
                {post.title} <span>by {post.authorName}</span>
              </h3>
            </div>
            <p>{post.content}</p>
            {/* asdsad */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
