import { useContext, useState } from "react";
import { AppContext } from "../../App.jsx";

function CreatePost() {
  const { currentUser, posts, setPosts } = useContext(AppContext);

  const [post, setPost] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (post.content) {
      fetch(`https://boolean-api-server.fly.dev/maritmoe/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      setPosts([...posts, { ...post }]);
      setPost({});
    }
  };

  return (
    <form className="dashboard-box" onSubmit={handleSubmit}>
      {currentUser && (
        <p
          className="initials"
          style={{ background: currentUser.favouriteColour }}
        >
          {currentUser.firstName[0] + currentUser.lastName[0]}
        </p>
      )}
      <input
        className="input"
        type="text"
        placeholder="What's on your mind?"
        onChange={(e) =>
          setPost({
            ...post,
            title: "No title",
            content: e.target.value,
            contactId: currentUser.id,
          })
        }
        value={post.content}
      />
      <button className="post-button" type="submit">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
