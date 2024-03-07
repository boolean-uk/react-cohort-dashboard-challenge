import { useState } from "react";

import PropTypes from "prop-types";
import { postData } from "../../utils/api";
import { basePostURL } from "../../utils/urls";
import UserCircle from "../UserCircle";

function CreatePostModule(props) {
  const { onPostCreation } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const userFirstName = localStorage.getItem("userFirstName");
  const userLastName = localStorage.getItem("userLastName");
  const userfavouriteColour = localStorage.getItem("favouriteColour");

  const handlePostClick = async () => {
    const contactId = localStorage.getItem("contactId");
    const payload = {
      title,
      content,
      contactId: parseInt(contactId),
    };

    const success = await postData(basePostURL, payload);

    if (!success) {
      console.error("OBS!!! Something went wrong creating á post");
    }
    onPostCreation();

    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className="blogpost-card">
        <div id="create-post-module-input">
          <UserCircle
            userFirstName={userFirstName}
            userLastName={userLastName}
            userfavouriteColour={userfavouriteColour}
          />

          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          ></input>
          <input
            id="content"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
          />
          <button onClick={handlePostClick}>POST</button>
        </div>
      </div>
    </>
  );
}

CreatePostModule.propTypes = {
  onPostCreation: PropTypes.func,
};

export default CreatePostModule;
