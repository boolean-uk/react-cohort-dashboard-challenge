import { useState } from "react";

function CreatePost({
  loggedInUserInitials,
  shouldGetPost,
  loggedInUser,
  posts,
}) {
  const [newPost, setNewPost] = useState("");

  const createPost = {
    id: posts.length + 1,
    contactId: loggedInUser.id,
    title: `${newPost.slice(0, 25)}`,
    content: newPost,
  };
  function CreateNewPost() {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createPost),
    };
    fetch("https://boolean-api-server.fly.dev/aayushlama4008/post", options)
      .then((response) => response.json())
      .then((data) => shouldGetPost(true));
  }

  function submitHandle(e) {
    e.preventDefault();
    CreateNewPost();
    setNewPost("");
  }
  return (
    <form className="create-post" onClick={submitHandle}>
      <div className="profile-circle">
        <p>{loggedInUserInitials}</p>
      </div>
      <div className="create-post--input">
        <input
          className="input-post"
          type="text"
          placeholder="What's on your mind?"
          onChange={(e) => setNewPost(e.target.value)}
          value={newPost}
          required
        />
      </div>
      <div className="post-button">
        <button type="submit">Post</button>
      </div>
    </form>
  );
}

export default CreatePost;
