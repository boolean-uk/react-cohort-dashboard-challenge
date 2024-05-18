import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";

export default function CreatePost() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [contactId, setContactId] = useState(1);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/samisalehsaeed/post`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.reverse());
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://boolean-uk-api-server.fly.dev/samisalehsaeed/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactId: Number(contactId),
        title: title,
        content: content,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([data, ...posts]);
        setContent("");
        setTitle("");
        setContactId(1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <form className="create-post" onSubmit={handleSubmit}>
        <li className="users">
          <input
            className="title-input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="content-input"
            type="text"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="post-btn" type="submit">
            POST
          </button>
        </li>
      </form>
      <ul className="users">
        {posts.map((post, index) => (
          <li className="users" key={index}>
            <h2>User</h2>
            <h3>
              <Link to={`/ViewPost/${post.id}`}>{post.title} </Link>
            </h3>
            <p>{post.content}</p>
            <AddComment postId={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
