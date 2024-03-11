import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `https://boolean-api-server.fly.dev/krzysztofmmm/post/1/comment`
      );
      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `https://boolean-api-server.fly.dev/krzysztofmmm/post/2/comment`,
      {
        content,
        postId: Number(postId),
        contactId: 1,
      }
    );
    setContent("");
    window.location.reload();
  };

  const handleDelete = async (commentId) => {
    await axios
      .delete(
        `https://boolean-api-server.fly.dev/krzysztofmmm/post/1/comment/1`
      )
      .then((response) => {
        console.log("Comment deleted:", response.data);
        setComments(comments.filter((comment) => comment.id !== commentId));
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Comment</button>
      </form>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <button onClick={() => handleDelete(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentForm;
