import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { PostContext } from "../../../App";
import "../styles/style.css";
export default function CreateNewPost() {
  const { activeUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  const [newPost, setNewPost] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const submitNewPost = (e) => {
    e.preventDefault();
    if (newPost === "") return;
    console.log(activeUser);

    let newPostObject = {
      contactId: activeUser.id,
      content: newPost,
      title: newPostTitle,
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
        setNewPostTitle("");
        setIsWriting(false);
        newPostObject = { ...newPostObject, id: data.id };
        setPosts([...posts, newPostObject]);
      });
  };
  return (
    <div className="create-post">
      <form className="create-post-form" onSubmit={submitNewPost}>
        <div
          className="create-post-profile"
          style={{ backgroundColor: activeUser.favouriteColour }}
        >
          <Link to={`/profile/${activeUser.id}`}>
            <h2>
              {activeUser.firstName.charAt(0)}
              {activeUser.lastName.charAt(0)}
            </h2>
          </Link>
        </div>
        <div className="input-container">
          <input
            className={`title-input ${isWriting ? "active" : ""}`}
            style={{ width: isWriting ? "45%" : "100%" }}
            type="text"
            value={isWriting ? newPostTitle : ""}
            placeholder={isWriting ? "Title" : "What's on your mind?"}
            rows={1}
            onClick={() => {
              console.log(isWriting);
              if (!isWriting) {
                setIsWriting(true);
              }
            }}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
          {isWriting && (
            <input
              className="post-input"
              style={{ width: "45%", marginLeft: "10px" }}
              type="text"
              value={newPost}
              rows={1}
              placeholder="What's on your mind?"
              onChange={(e) => setNewPost(e.target.value)}
            />
          )}
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}
