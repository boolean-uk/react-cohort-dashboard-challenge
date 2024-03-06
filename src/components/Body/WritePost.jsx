import { useContext, useState } from "react";
import { PostContext } from "../../App.jsx";
import "./Body.css";

const INITIAL_POST = {
  title: "",
  content: "",
};

export default function WritePost() {
  const { posts, setPosts } = useContext(PostContext);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleFormChange = (event) => {
    const { value } = event.target;
    setNewPost({ ...newPost, content: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewPost(INITIAL_POST);
    if (newPost.content !== "" && newPost.content !== undefined) {
      const tempArray = newPost.content.split(".");
      newPost.title = tempArray[0];
      newPost.contactId = 1; // PLACEHOLDER ID
      fetch(`https://boolean-api-server.fly.dev/VictorAdamson/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((jsonData) => {
          //If request is Ok
          setNewPost(jsonData);
          //Add the newly added post to the original state
          setPosts([...posts, newPost]);
        })
        .catch((err) => {
          //If request is bad
          console.log(err, "Error: post could not be added!");
        });
    } else {
      console.log("Can't create empty post!");
    }
  };

  return (
    <>
      <div className="post-box">
        <form onSubmit={handleSubmit}>
          <label className="profile-icon">VA</label>
          <input
            type="text"
            placeholder="What's on your mind...?"
            className="form-input"
            value={newPost.content}
            onChange={handleFormChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}
