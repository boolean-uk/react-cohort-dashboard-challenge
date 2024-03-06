import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}/comment`
      );
      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}/comment`,
      { content, postId: Number(postId), contactId: 42 } // i set 42 just for tests,update in future if needed
    );
    setComments([...comments, response.data]);
    setContent("");
  };

  const handleDelete = async (commentId) => {
    await axios.delete(
      `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}/comment/${commentId}`
    );
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <button onClick={() => handleDelete(comment.id)}>Delete</button>
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
