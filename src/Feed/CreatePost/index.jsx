import { useContext, useState } from "react";
import { PostContext, UserContext } from "../../App";

export default function CreatePost() {
  const { posts, setPosts } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);
  const [post, setPost] = useState({
    contactId: loggedInUser ? loggedInUser.id : null,
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post.title && post.content) {
      try {
        const response = await fetch(
          "https://boolean-api-server.fly.dev/espensolhaug1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log("Post created successfully:", result);
          setPosts([result, ...posts]);

          // Clear the form fields
          setPost({
            contactId: loggedInUser ? loggedInUser.id : null,
            title: "",
            content: "",
          });
        } else {
          console.error("Failed to create post:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Title and content are required.");
    }
  };

  return (
    <div className="createPost">
      {loggedInUser && (
        <div
          className="initials"
          style={{
            backgroundColor: loggedInUser.favouriteColour,
            color: "black",
          }}
        >
          {loggedInUser.firstName[0]}
          {loggedInUser.lastName[0]}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={post.title}
            placeholder="Write a title"
            required
          ></input>
          <textarea
            name="content"
            onChange={handleChange}
            value={post.content}
            placeholder="What's on your mind?"
            required
          ></textarea>
        </div>

        <input type="submit" value="Post!"></input>
      </form>
    </div>
  );
}
