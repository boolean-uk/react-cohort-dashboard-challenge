import PropTypes from "prop-types"

function PostListItem({ post }) {
    return (
      <li className="post-li">
        <div className="post-header">
          {/* TODO user info */}
          <h3>{post.title}</h3>
        </div>
        <p>{post.content}</p>
      </li>
    );
}

PostListItem.propTypes = {
    post: PropTypes.object
}

export default PostListItem