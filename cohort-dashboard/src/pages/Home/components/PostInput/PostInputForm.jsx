import { useState } from "react";

const INITIAL_STATE = {
  title: "",
  content: "",
  contactId: 1,
};

export default function PostInputForm(props) {
  const [newPost, setNewPost] = useState(INITIAL_STATE);

  const { setRefresh } = props;

  const createPost = () => {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    };

    fetch("https://boolean-api-server.fly.dev/yee0802/post", opts)
      .then((res) => res.json())
      .then(() => {
        const form = document.getElementById("post-form");

        setNewPost(INITIAL_STATE);
        setRefresh(true);

        form.reset();
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setNewPost({ ...newPost, [name]: value });
  };

  return (
    <>
      <form id="post-form">
        <input
          className="post-input-title input-p"
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="post-input-content input-p"
          type="text"
          name="content"
          placeholder="What's on your mind?"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <button className="post-btn" onClick={createPost}>
        Post
      </button>
    </>
  );
}
