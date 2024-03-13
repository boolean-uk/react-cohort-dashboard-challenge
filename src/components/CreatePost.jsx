import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import Icon from "./Icon";

export default function CreatePost() {
  const context = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const [flag, setFlag] = useState(true);

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
        context.setPosts([...context.posts, newPost]);
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
      setFormData({ contactId: context.user.id, title: "", content: "" });
    }
    setFlag(false);
  }, [flag, context.user.id]);

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
            <Icon user={context.user} />
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
                placeholder="What's on your mind..."
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
