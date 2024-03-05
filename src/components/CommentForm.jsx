import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}/comment`
        );
        if (response.status === 200) {
          setComments(response.data);
        } else {
          console.error(
            "Error fetching comments:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      alert("Comment content cannot be empty");
      return;
    }
    try {
      const response = await axios.post(
        `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}/comment`,
        { content }
      );
      if (response.status === 200) {
        setComments([...comments, response.data]);
        setContent("");
      } else {
        console.error(
          "Error posting comment:",
          response.status,
          response.statusText
        );
        console.error("Server response:", response.data); // Log the server's response
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentForm;
