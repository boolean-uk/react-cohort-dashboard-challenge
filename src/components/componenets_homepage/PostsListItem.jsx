import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommentsListItem from "./CommentsListItem.jsx";
import { fetchData } from "../../utils/api";

function PostsListItem(props) {
  const { post } = props;

  const [currentContact, setCurrentContact] = useState(null);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;

  useEffect(() => {
    fetchData(URL, post.contactId, setCurrentContact);
  }, [URL, post.contactId]);

  return (
    <>
      <div className="blogpost-card">
        {currentContact ? (
          <div className="contact-card">
            <h2>{`${currentContact.firstName} ${currentContact.lastName}`}</h2>
            <h3>{`${post.title}`}</h3>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <div className="content-card">
          <p>{post.content}</p>
        </div>
        <div className="post-comment-card">
          <CommentsListItem post={post} />
          <input type="text" placeholder="Add a comment..."></input>
        </div>
      </div>
    </>
  );
}

PostsListItem.propTypes = {
  post: PropTypes.object,
};

export default PostsListItem;
