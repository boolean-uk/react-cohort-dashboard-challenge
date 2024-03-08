import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostContent({ post }) {
  const { users } = useContext(AppContext);
  const user = users.find((user) => user.id === post.contactId);

  return (
    <div className="post-content-box">
      {user && (
        <div className="post-content-header">
          <p className="initials" style={{ background: user.favouriteColour }}>
            {user.firstName[0] + user.lastName[0]}
          </p>
          <h3>{user.firstName + " " + user.lastName}</h3>
          <Link className="post-content-header-link" to={`/post/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
        </div>
      )}
      <p>{post.content}</p>
    </div>
  );
}

PostContent.propTypes = {
  post: PropTypes.object,
};

export default PostContent;
