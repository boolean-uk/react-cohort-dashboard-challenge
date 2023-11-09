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

  return (
    <>
      <form id="post-form">
        <input
          className="post-input"
          type="text"
          placeholder="What's on your mind?"
          onChange={(e) => {
            e.preventDefault();
            setNewPost({ ...newPost, content: e.target.value });
          }}
        />
      </form>
      <button className="post-btn" onClick={createPost}>
        Post
      </button>
    </>
  );
}
