import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { PostContext } from "./Post";
import sendIcon from "../assets/images/sendicon.png";
import Icon from "./Icon";

export default function CreateComment() {
  const [formData, setFormData] = useState({});
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
          className="create-comment-form"
          onSubmit={(e) => {
            e.preventDefault();
            addComment(formData);
          }}
        >
          <Icon user={context.user} />
          <div className="textarea-section">
            <textarea
              id="content"
              name="content"
              type="text"
              placeholder="Add a comment..."
              value={formData.content}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="img-update-btn">
              <img className="update-button-img" src={sendIcon} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
