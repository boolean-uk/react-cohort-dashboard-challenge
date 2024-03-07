import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { PostContext } from "../../../App";
import "../styles/style.css";
export default function CreateNewPost() {
  const { activeUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  const [newPost, setNewPost] = useState("");
  const submitNewPost = (e) => {
    e.preventDefault();
    if (newPost === "") return;
    console.log(activeUser);

    let newPostObject = {
      contactId: activeUser.id,
      content: newPost,
      title: "Lorem ipsum dolor sit amet",
    };
    fetch("https://boolean-api-server.fly.dev/AlexanderNiklasson/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPostObject),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewPost("");
        newPostObject = { ...newPostObject, id: data.id };
        setPosts([...posts, newPostObject]);
      });
  };
  return (
    <div className="create-post">
      <form className="create-post-form" onSubmit={submitNewPost}>
        <div
          className="create-post-profile"
          style={{ backgroundColor: activeUser.favouriteColour }}>
          <Link to={`/profile/${activeUser.id}`}>
            <h2>
              {activeUser.firstName.charAt(0)}
              {activeUser.lastName.charAt(0)}
            </h2>
          </Link>
        </div>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          rows={1}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
