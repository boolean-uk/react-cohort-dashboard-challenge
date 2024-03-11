import { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateComment(props) {
  const { post, setDataFetched, posts, setPosts } = props;
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
    console.log(post.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://boolean-api-server.fly.dev/nicolaiklokmose/post/${post.id}/comment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: post.id,
          contactId: post.contactId,
          content: formData.content,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log(`Comment ${formData.content} created successfully`);
          setFormData({
            content: "", // clear the form after submission
          });
          const updatedPosts = posts.map((p) => {
            if (p.id === post.id) {
              return {
                ...p,
                comments: [...p.comments, { content: formData.content }],
              };
            }
            return p;
          });
          setPosts(updatedPosts); // Update the posts state with the new comment
        }
      })
      .catch((error) => {
        console.error("Error creating comment:", error);
      });
  };

  const circleStyle = {
    backgroundColor: "pink",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    fontWeight: "bold",
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="circle" style={circleStyle}>
        NK
      </div>
      <input
        type="text"
        name="content"
        value={formData.content}
        onChange={handleChange}
        className="comment-input"
        placeholder="Add a comment..."
      />
      <button type="submit" className="comment-button">
        Comment
      </button>
    </form>
  );
}
