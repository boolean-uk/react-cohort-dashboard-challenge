import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommentsListItem from "./CommentsListItem.jsx";
import { getInitials } from "../../utils/getInitials";

function PostsListItem(props) {
  const { post } = props;

  const [currentContact, setCurrentContact] = useState(null);
  const [comments, setComments] = useState([]);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}/${post.contactId}`);

      if (!response.ok) {
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setCurrentContact(data);

      if (data.comments) {
        setComments(data.comments);
      }
    } catch (error) {
      console.log("OBS!!! Something went wrong:", error.message);
    }
  };

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
              <h3>{`${post.title}`}</h3>
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
