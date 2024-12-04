import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import { baseUrl } from "../App";

// components
import Avatar from "./Avatar";
import TextInput from "./TextInput";

export default function CreatePost() {
  const { user, posts, setPosts } = useContext(DataContext);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const subContent = content[0]?.toUpperCase() + content.substring(1, 25);

  const contactId = user?.id;

  useEffect(() => {
    setTitle(subContent);
  }, [content, subContent]);

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch(`${baseUrl}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactId,
        title,
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setPosts([...posts, data]);
        }
      })
      .catch((error) => console.error(error));

    setContent("");
  }

  return (
    <>
      <form className="create-post" onSubmit={handleFormSubmit}>
        <Link to="/profile/1">
          <Avatar>{user}</Avatar>
        </Link>

        <TextInput
          type="text"
          name="newPost"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          disabled={content === ""}
          className={content === "" ? "disabled" : ""}
        >
          Post
        </button>
      </form>
    </>
  );
}
