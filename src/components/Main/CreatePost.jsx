import { useContext, useState } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import { UserContext } from "../../App";
import { postRequest } from "../../utilites/apiRequests";
import PropTypes from "prop-types";

export const CreatePost = ({ getPosts }) => {
  const user = useContext(UserContext);
  const [formData, setFormData] = useState("");

  const postNewPost = () => {
    return postRequest(
      "https://boolean-api-server.fly.dev/LinusWillmont/post",
      {
        title: "Title",
        content: formData,
        contactId: user.id,
      }
    )
      .then((data) => console.log(data))
      .catch((error) => console.error("Failed to post", error));
  };

  const handleInput = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.length) return;

    postNewPost()
      .then(() => getPosts())
      .then(setFormData(""))
      .catch((error) => console.error(error));
  };

  return (
    <div className="card create-post-item">
      <ProfileIcon user={user} />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="form-text-input"
          value={formData}
          onChange={handleInput}
        />
        <button className="post-submit-button">Post</button>
      </form>
    </div>
  );
};

CreatePost.propTypes = {
  getPosts: PropTypes.func,
};
