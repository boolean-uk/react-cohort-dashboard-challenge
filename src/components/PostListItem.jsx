import PropTypes from "prop-types";
import { useContext } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { Context } from "../App";
import { Comments } from "./Comments";

function PostListItem({ post }) {
  const { users } = useContext(Context);

  function getUserInfo(contactId) {
    return users.find((user) => Number(user.id) === Number(contactId));
  }

  return (
    <li className="post-li">
      <div className="post-header">
        <div className="post-avatar-container">
          <Avatar
            name={`${getUserInfo(post.contactId).firstName} ${
              getUserInfo(post.contactId).lastName
            }`}
            round={true}
            size={60}
          />
        </div>
        <div className="post-details">
          <b>
            {`${getUserInfo(post.contactId).firstName} ${
              getUserInfo(post.contactId).lastName
            }`}
          </b>{" "}
          <br />
          <Link
            to={`/post/${post.id}`}
            state={{
              firstName: getUserInfo(post.contactId).firstName,
              lastName: getUserInfo(post.contactId).lastName,
            }}
          >
            {post.title}
          </Link>
        </div>
      </div>
      <p>{post.content}</p>
      <div className="line-container">
        <hr className="line" />
      </div>
      <Comments post={post} getUserInfo={getUserInfo} />
    </li>
  );
}

PostListItem.propTypes = {
  post: PropTypes.object,
};

export default PostListItem
