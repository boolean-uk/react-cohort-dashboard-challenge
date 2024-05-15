import Avatar from "./Avatar";
import TextInput from "./TextInput";

import { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";

export default function CreatePost() {
  const { user, posts, setPosts } = useContext(DataContext);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const subContent = content[0]?.toUpperCase() + content.substring(1, 20);

  const contactId = user?.id;

  useEffect(() => {
    setTitle(subContent);
  }, [content, subContent]);

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch("https://boolean-api-server.fly.dev/Hamada-AB/post", {
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
        console.log(data);
        setPosts([...posts, data]);
      });

    setContent("");
  }

  return (
    <>
      <form className="create-post" onSubmit={handleFormSubmit}>
        <Avatar>{user}</Avatar>
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
