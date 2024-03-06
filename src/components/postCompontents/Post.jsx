import { Link } from "react-router-dom";
import { ProfileIcon } from "../General/ProfileIcon";
import { PropTypes } from "prop-types";
import { getRequest } from "../../utilites/apiRequests";
import { useEffect, useState } from "react";
import { CommentsList } from "./CommentsList";

export const Post = ({ post }) => {
  const [postOwner, setPostOwner] = useState(null);

  useEffect(() => {
    getRequest(
      `https://boolean-api-server.fly.dev/LinusWillmont/contact/${post.contactId}`
    )
      .then((postOwner) => {
        setPostOwner(postOwner);
      })
      .catch((error) => console.error("Failed to get post owner", error));
  }, [post.contactId]);

  if (!postOwner) {
    return (
      <>
        <p>Loading posts</p>
      </>
    );
  } else {
    return (
      <div className="card">
        <div className="post">
          <div className="post-header">
            <ProfileIcon user={postOwner} />
            <div className="post-details">
              <h1>{`${postOwner.firstName} ${postOwner.lastName}`}</h1>
              <Link to={`../posts/${post.id}`}>{post.title}</Link>
            </div>
          </div>
          <p>{post.content}</p>
        </div>
        <CommentsList postId={post.id} />
      </div>
    );
  }
};

Post.propTypes = {
  post: PropTypes.object,
};
