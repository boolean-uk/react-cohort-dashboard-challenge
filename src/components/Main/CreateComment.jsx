import { useContext, useState } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import { UserContext } from "../../App";
import { postRequest } from "../../utilites/apiRequests";
import PropTypes from "prop-types";

export const CreateComment = ({ postId, getComments }) => {
  const user = useContext(UserContext);
  const [formData, setFormData] = useState("");

  const postComment = () => {
    return postRequest(
      `https://boolean-api-server.fly.dev/LinusWillmont/post/${postId}/comment`,
      {
        postId: postId,
        content: formData,
        contactId: user.id,
      }
    )
      .then((data) => console.log("Posted comment", data))
      .catch((error) => console.error("Failed to post comment", error));
  };

  const handleInput = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Posting comment", formData);
    postComment()
      .then(() => getComments())
      .then(setFormData(""))
      .catch((error) => console.error(error));
  };

  return (
    <div className="create-post-item">
      <ProfileIcon user={user} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          className="form-text-input"
          value={formData}
          onChange={handleInput}
        />
        <button>{`>`}</button>
      </form>
    </div>
  );
};

CreateComment.propTypes = {
  postId: PropTypes.number,
  getComments: PropTypes.func,
};
