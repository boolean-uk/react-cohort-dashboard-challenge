import { useContext } from "react";
import { PostContext, UserContext } from "../App";
import "./styling/postForm.css";
import ProfileImage from "./ProfileImage";

function PostForm() {
  const { posts, setPosts } = useContext(PostContext);
  const { currentUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://boolean-uk-api-server.fly.dev/badde00/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: event.target.title.value,
        content: event.target.post.value,
        contactId: currentUser.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          setPosts([...posts, data]);
          event.target.reset();
        }
      });
  };

  return (
    <div className="post-form-container">
      {currentUser && <ProfileImage user={currentUser} />}
      <form onSubmit={handleSubmit} className="post-form">
        <div className="title-and-button">
          <input
            className="post-form-input title-input"
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            required
          />
          <button type="submit" className="post-button">
            Submit
          </button>
        </div>
        <textarea
        className="post-form-input post-input"
        placeholder="What's on your mind?"
        id="post"
        name="post"
        required
      />
      </form>
    </div>
  );
}

export default PostForm;
