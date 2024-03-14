import axios from "axios";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Post = ({ post }) => {
  const { postId } = useParams();

  const handleDelete = async () => {
    await axios.delete(`/{username}/post/${postId}`);
    window.location.href = "/"; // Redirect to home after deletion
  };

  const handleUpdate = async () => {
    const updatedPost = { ...post, content: "Updated Content" };
    await axios.put(`/{username}/post/${postId}`, updatedPost);
    window.location.reload();
  };

  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleUpdate}>Update Post</button>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
