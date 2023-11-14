//  1. Import useState
import { useState } from "react";

//  2. Create function for the newPost

function NewPost() {
  const [content, setContent] = useState([]);

  //  3. fetch POST request

  const createPost = () => {
    const data = {
      title: "Default title",
      content,
      contactId: 1,
    };
    fetch("https://boolean-api-server.fly.dev/ps975076/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // 4. HTML
  return (
    <div className="postContainer">
      <div className="userInitialsPost">
        <p>AW</p>
      </div>
      <div className="whatsOnMind">
        <form>
          <input
            className="whatsOn"
            placeholder="What's on your mind?"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
      </div>
      <div className="postButton">
        <button onClick={createPost} className="postBtn">
          <p>Post</p>
        </button>
      </div>
    </div>
  );
}

export default NewPost;
