import { useContext } from "react";
import { UserContext } from "../App";
import PropTypes from "prop-types";
import CommentFeed from "./CommentFeed";
import { Link } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import "./styling/inlinePost.css";

function InlinePost({ post }) {
  InlinePost.propTypes = {
    post: PropTypes.object.isRequired,
  };

  const { findUserName, findUser } = useContext(UserContext);
  const user = findUser(post.contactId);

  return (
    <div className="inline-post">
      <div className="inline-post-header">
        <div
          className="profile-image"
          style={{
            backgroundColor: findUserName(post.contactId).favouriteColour,
          }}
        >
          {findUserName(post.contactId).initials}
          {user && <ProfileImage user={user} />}
        </div>
        <div className="inline-post-content">
          <h3>{findUserName(post.contactId)}</h3>
          <b>
            <Link to={`/post/${post.id}`}>{post.title}</Link>{" "}
          </b>
        </div>
      </div>
      <p>{post.content}</p>
      <CommentFeed postId={post.id} />
    </div>
  );
}

export default InlinePost;
