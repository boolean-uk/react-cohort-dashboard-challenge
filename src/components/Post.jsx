import PropTypes from "prop-types";
import CommentForm from "./CommentForm";

const Post = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentForm postId={post.id.toString()} />{" "}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
