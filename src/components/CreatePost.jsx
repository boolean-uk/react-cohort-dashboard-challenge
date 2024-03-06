import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";

export default function CreatePost({ posts, setPosts, user }) {
  const [formData, setFormData] = useState([]);
  const [flag, setFlag] = useState(true);

  // const navigate = useNavigate();

  const addPost = (formData) => {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("https://boolean-api-server.fly.dev/ssuihko/post", postOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then((newPost) => {
        setPosts([...posts, newPost]);
      })
      .catch((err) => {
        console.log(err);
      });

    setFlag(true);
  };

  const handleInputChange = (event) => {
    const { name, type, value } = event.target;
    // console.log("handleInput", name, type, value);

    if (name !== undefined) {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    if (flag === true) {
      setFormData({ contactId: user.id, title: "", content: "" });
    }
    setFlag(false);
  }, [flag, user.id]);

  return (
    <div className="create-post">
      {formData === undefined ? (
        <p>loading...</p>
      ) : (
        <div className="form-div">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addPost(formData);
            }}
          >
            <div className="profile-icon-contact">
              <div id="profile-icon-id-contact">
                {user.firstName.charAt(0) + "" + user.lastName.charAt(0)}
              </div>
            </div>
            <div>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Add a title.."
                value={formData.title ?? ""}
                onChange={handleInputChange}
              ></input>
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
                value={formData.content ?? ""}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

CreatePost.propTypes = {
  posts: PropTypes.array,
  setPosts: PropTypes.func,
  user: PropTypes.object,
};
