/* eslint-disable react/prop-types */
import { useState, useContext } from "react";

import { MyContext } from "../../App.jsx";
import Avatar from "../Avatar";
import "./PostForm.css";

export default function PostForm({ onSubmit }) {
  const { user } = useContext(MyContext);
  const [newPost, setNewPost] = useState("");

  const handleTextChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleOnSubmit = () => {
    onSubmit(newPost);
    setNewPost("");
  };

  return (
    <>
      <div className="new-post-form">
        <div className="avatar-wrapper">
          <Avatar nameInitials={user.firstName[0] + "" + user.lastName[0]} />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={handleTextChange}
          />
        </div>
        <div className="button-wrapper">
          <button className="post" onClick={handleOnSubmit}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}
