import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../App";
import { PostContext } from "./Post";

export default function CreateComment() {
  const [formData, setFormData] = useState([]);
  const context = useContext(AppContext);
  const postContext = useContext(PostContext);
  const [flag, setFlag] = useState(true);

  const addComment = (formData) => {
    formData.postId = postContext.post.id;

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(
      `https://boolean-api-server.fly.dev/ssuihko/post/${postContext.post.id}/comment`,
      postOptions
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then((newComment) => {
        postContext.setComments([...postContext.comments, newComment]);
      })
      .catch((err) => {
        console.log(err);
      });
    setFlag(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name !== undefined) {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    if (flag === true) {
      setFormData({
        contactId: context.user.id,
        content: "",
      });
    }
    setFlag(false);
  }, [flag, context.user.id, postContext.post]);

  return (
    <div className="create-comment">
      {formData === undefined ? (
        <p>loading...</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment(formData);
          }}
        >
          <div className="profile-icon-contact">
            <div id="profile-icon-id-contact">
              {context.user.firstName.charAt(0) +
                "" +
                context.user.lastName.charAt(0)}
            </div>
          </div>
          <button type="submit" className="post-btn">
            Post
          </button>
          <div className="textarea-section">
            <textarea
              id="content"
              name="content"
              type="text"
              placeholder="Add a comment..."
              value={formData.content}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </form>
      )}
    </div>
  );
}

CreateComment.propTypes = {
  comments: PropTypes.array,
  setComments: PropTypes.func,
  post: PropTypes.object,
  user: PropTypes.object,
};
