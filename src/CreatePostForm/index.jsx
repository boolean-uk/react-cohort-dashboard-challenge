import { useState, useContext } from "react";
import { PostContext, UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function CreatePostForm() {
  const postContext = useContext(PostContext);
  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    contactId: userContext.mainUserId,
  });

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

    fetch("https://boolean-api-server.fly.dev/svennas/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((resp) => resp.json())
      .then((postNew) => postContext.setPosts((post) => [...post, postNew]));

    setNewPost({ ...newPost, title: "", content: "" });
  };

  let mainUser = userContext.users.find(
    (user) => user.id === userContext.mainUserId
  );
  if (!mainUser) return <div></div>;

  const goToProfile = () => {
    navigate(`/view_profile/${mainUser.id}`);
  };

  return (
    <form className="create_post_layout">
      <div className="icon_div">
        <button
          className=" poster_circle_button"
          style={{ backgroundColor: mainUser.favouriteColour }}
          onClick={goToProfile}
        >
          <p className=" poster_circle_text">
            {mainUser.firstName.charAt(0)}
            {mainUser.lastName.charAt(0)}
          </p>
        </button>
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
