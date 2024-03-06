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
  const contactId = localStorage.getItem("contactId");
  const URL = `https://boolean-api-server.fly.dev/llllllll-l/post`;

  const userInitials = getInitials(`${userFirstName} ${userLastName}`);

  const handlePostClick = async () => {
    const payload = {
      title,
      content,
      contactId: parseInt(contactId),
    };

    const success = await postData(basePostURL, payload);

    if (!success) {
      console.error("OBS!!! Something went wrong creating post");
    }
    onPostCreation();

    setTitle("");
    setContent("");
    // try {
    //   const response = await fetch(URL, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title,
    //       content,
    //       contactId: parseInt(contactId),
    //     }),
    //   });

    //   if (response.ok) {
    //     console.log("Post created successfully!");
    //     setTitle("");
    //     setContent("");

    //     onPostCreation();
    //   } else {
    //     console.error(
    //       `OBS!!! Something went wrong createing post: ${response.statusText}`
    //     );
    //   }
    // } catch (er) {
    //   console.log(
    //     `OBS!!! Something went wrong createing post: ${er.statusText}`
    //   );
    // }
  };
  return (
    <>
      <div className="blogpost-card">
        <div id="create-post-module-input">
          {userInitials ? (
            <div className="initials-circle">{userInitials}</div>
          ) : (
            <div>Loading...</div>
          )}

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          ></input>
          <input
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
