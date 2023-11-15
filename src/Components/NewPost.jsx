//  1. Import useState
import { useState } from "react";

//  2. Create function for the newPost

function NewPost({ createPost }) {
  const [content, setContent] = useState([]);

  const handleCreate = () => {
    createPost(content);
    setContent("");
  };

  // 4. HTML
  return (
    <div className="postContainer">
      <div className="userInitialsPost">
        <p>AW</p>
      </div>
      <div className="whatsOnMind">
        <input
          className="whatsOn"
          placeholder="What's on your mind?"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="postButton">
        <button onClick={handleCreate} className="postBtn">
          <p>Post</p>
        </button>
      </div>
    </div>
  );
}

export default NewPost;
