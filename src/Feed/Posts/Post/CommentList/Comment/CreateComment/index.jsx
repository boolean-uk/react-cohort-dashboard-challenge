import { useContext, useEffect, useState } from "react";
import { PostContext, UserContext } from "../../../../../../App";

export default function CreateComment(props) {
  const { post, comments, setComments } = props;
  const { posts, setPosts } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState({
    contactId: null,
    postId: post.id,
    content: "",
  });

  useEffect(() => {
    if (loggedInUser) {
      setComment((c) => ({ ...c, contactId: parseInt(loggedInUser.id) }));
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComment({ ...comment, contactId: loggedInUser });
    if (comment.content) {
      try {
        const response = await fetch(
          `https://boolean-api-server.fly.dev/espensolhaug1/post/${post.id}/comment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log("Comment created successfully:", result);
          setComments([...comments, result]);

          // Clear the form fields
          setComment({
            contactId: loggedInUser ? loggedInUser.id : null,
            content: "",
            postId: post.id,
          });
        } else {
          console.error("Failed to create comment:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Content is required.");
    }
  };

  return (
    <div className="createComment">
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
          <textarea
            name="content"
            onChange={handleChange}
            value={comment.content}
            placeholder="Write comment here"
            required
          ></textarea>
        </div>

        <input type="submit" value="Post!"></input>
      </form>
    </div>
  );
}
