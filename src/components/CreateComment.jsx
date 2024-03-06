import { useState, useEffect } from "react";
import imgDoge from "../assets/images/doge.jpg";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../App";

export default function CreateComment({ comments, setComments, post }) {
  const [formData, setFormData] = useState([]);
  const context = useContext(AppContext);

  const addComment = (formData) => {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    console.log(formData);

    fetch(
      `https://boolean-api-server.fly.dev/ssuihko/post/{post.id}/comment`,
      postOptions
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then((newComment) => {
        setComments([...comments, newComment]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event) => {
    const { name, type, value } = event.target;
    console.log("handleInput", name, type, value);

    if (name !== undefined) {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    setFormData({ contactId: context.user.id, postId: post.id, content: "" });
  }, []);

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
