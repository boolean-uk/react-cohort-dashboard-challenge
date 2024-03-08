import React, { useState, useEffect, useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [postContent, setPostContent] = useState({
    title: "",
    content: "",
    contactId: 1,
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostContent((prevData) => ({ ...prevData, [name]: value }));
  };
  const addNewPost = () => {
    fetch("https://boolean-api-server.fly.dev/hannapham1007/post", {
      method: "POST",
      body: JSON.stringify(postContent),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error adding new answer", error));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewPost();
    setPostContent({
      title: "",
      content: "",
    });
    navigate("/");
  };

  return (
    <div className="create-post">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title"></label>
            <textarea
              name="title"
              type="text"
              id="title"
              placeholder="Title"
              value={postContent.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="content"></label>
            <textarea
              name="content"
              id="content"
              placeholder="What's on your mind?"
              value={postContent.content}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" style={{background:'var(--background', color:'var(--white'}}>Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
