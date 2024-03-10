import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialPostInfo = {
  title: "",
  content: "",
  contactId: 1,
};

function CreatePost({ setPosts, fetchPosts, fetchAuthor }) {
  const [postInfo, setPostInfo] = useState(initialPostInfo);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://boolean-api-server.fly.dev/jacobchenjensen/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchAuthor(data).then((postWithAuthor) => {
          setPosts((prevPosts) => [postWithAuthor, ...prevPosts]);
        });

        fetchPosts();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginLeft: "20px",
      }}
    >
      <label htmlFor="Title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={(e) =>
          setPostInfo((prevPostInfo) => ({
            ...prevPostInfo,
            title: e.target.value,
          }))
        }
        value={postInfo.title}
        required
      />
      <br />
      <label htmlFor="Content">Content</label>
      <input
        type="text"
        id="content"
        name="content"
        onChange={(e) =>
          setPostInfo((prevPostInfo) => ({
            ...prevPostInfo,
            content: e.target.value,
          }))
        }
        value={postInfo.content}
        required
      />
      <br />
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
}
export default CreatePost;
