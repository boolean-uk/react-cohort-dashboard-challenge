import PostSummary from "./PostSummary";
import { useContext, useState } from "react";
import { AppContext } from "../App";

function HomePage() {
  const { posts, setPosts, contacts, getInitials } = useContext(AppContext);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handlePostFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch(
        "https://boolean-api-server.fly.dev/pialoana/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newPostTitle,
            content: newPostContent,
            contactId: 6,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();

      setPosts((prevPosts) => [data, ...prevPosts]);

      setNewPostTitle("");
      setNewPostContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setNewPostTitle(value);
    } else if (name === "content") {
      setNewPostContent(value);
    }
  };

  return (
    <div>
      <form className="post-form" onSubmit={handlePostFormSubmit}>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={newPostTitle}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="content"></label>
        <textarea
          id="content"
          name="content"
          placeholder="What is on your mind?"
          value={newPostContent}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
      <div className="posts">
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <PostSummary
              key={post.id}
              post={post}
              setPosts={setPosts}
              contacts={contacts}
              getInitials={getInitials}
            />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
