import { useState } from "react";
import { getInitials } from "../../utils/getInitials";
import PropTypes from "prop-types";
import { postData } from "../../utils/api";
import { basePostURL } from "../../utils/urls";

function CreatePostModule(props) {
  const { onPostCreation } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const userFirstName = localStorage.getItem("userFirstName");
  const userLastName = localStorage.getItem("userLastName");

  const userInitials = getInitials(`${userFirstName} ${userLastName}`);

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
          {userInitials ? (
            <div
              className="initials-circle"
              style={{
                backgroundColor: `${localStorage.getItem("favouriteColour")}`,
              }}
            >
              {userInitials}
            </div>
          ) : (
            <div>Loading...</div>
          )}

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
