import CommentSection from "./CommentSection";
import PostContent from "./PostContent";
import PropTypes from "prop-types";

function PostListItem({ post }) {
  return (
    <li className="dashboard-box">
      <PostContent post={post} />
      <CommentSection post={post} />
    </li>
  );
}

PostListItem.propTypes = {
  post: PropTypes.object,
};

export default PostListItem;
