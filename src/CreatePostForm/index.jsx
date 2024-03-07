import { useState, useContext } from "react";
import { PostContext, UserContext } from "../App";
import "./index.css";

const emptyPost = (userId) => {
  const emptyPost = {
    title: "",
    content: "",
    contactId: userId,
  };
  return emptyPost
};

export default function CreatePostForm() {
  const postContext = useContext(PostContext);
  const userContext = useContext(UserContext);

  const [newPost, setNewPost] = useState(emptyPost(userContext.mainUserId));

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "title") {
      setNewPost({ ...newPost, title: inputValue });
    }
    if (inputName === "content") {
      setNewPost({ ...newPost, content: inputValue });
    }
  };

  const handlePost = (event) => {
    event.preventDefault();
    console.log("Handle POST a new Post");

    fetch("https://boolean-api-server.fly.dev/svennas/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    postContext.setPosts((post) => [...post, newPost]);
    setNewPost(emptyPost);
  };

  let mainUser = userContext.users.find(
    (user) => user.id === userContext.mainUserId
  );
  if (!mainUser) return <div></div>;

  return (
    <form className="create_post_layout">
      <div className="icon_div">
        <div className=" circle">
          <p className=" circle_text">
            {mainUser.firstName.charAt(0)}
            {mainUser.lastName.charAt(0)}
          </p>
        </div>
      </div>
      <div className="insertion_div ">
        <input
          className="title_input"
          type="text"
          id="title"
          name="title"
          placeholder="Title it!"
          value={newPost.title}
          onChange={handleChange}
        />
        <p></p>
        <input
          className="content_input"
          type="text"
          id="content"
          name="content"
          placeholder="What's on your mind?"
          value={newPost.content}
          onChange={handleChange}
        />
        <button className="post_button" type="submit" onClick={handlePost}>
          <p className="button_text">Post</p>
        </button>
      </div>
    </form>
  );
}
