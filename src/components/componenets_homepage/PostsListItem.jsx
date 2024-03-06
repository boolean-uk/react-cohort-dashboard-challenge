import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommentsListItem from "./CommentsListItem.jsx";
import { getInitials } from "../../utils/getInitials";
import { Link } from "react-router-dom";
import { fetchDataByContactId } from "../../utils/api.js";

function PostsListItem(props) {
  const { post } = props;

  const [currentContact, setCurrentContact] = useState(null);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;

  useEffect(() => {
    setCurrentContact(fetchDataByContactId(post.contactId));
  }, []);

  return (
    <>
      <div className="blogpost-card">
        {currentContact ? (
          <div className="contact-card">
            <div className="initials-circle">
              {getInitials(
                `${currentContact.firstName} ${currentContact.lastName}`
              )}
            </div>
            <div className="contact-info">
              <h2>{`${currentContact.firstName} ${currentContact.lastName}`}</h2>
              <Link to={`/post/view/${post.id}`}>
                <h3>{`${post.title}`}</h3>
              </Link>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <div className="content-card">
          <p>{post.content}</p>
        </div>
        <div className="post-comment-card">
          <CommentsListItem post={post} />
        </div>
      </div>
    </>
  );
}

PostsListItem.propTypes = {
  post: PropTypes.object,
};

export default PostsListItem;
