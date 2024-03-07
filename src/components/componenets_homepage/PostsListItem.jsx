import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommentsListItem from "./CommentsListItem.jsx";
import { Link } from "react-router-dom";
import { fetchDataByContactId } from "../../utils/api.js";
import UserCircle from "../UserCircle.jsx";

function PostsListItem(props) {
  const { post } = props;

  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataByContactId(post.contactId);

        if (response) {
          setCurrentContact(response);
        }
      } catch (error) {
        console.log("OBS!!! Something went wrong:", error.message);
      }
    };

    fetchData();
  }, [post.contactId]);

  return (
    <>
      <div className="blogpost-card">
        {currentContact ? (
          <div className="contact-card">
            <UserCircle
              userFirstName={currentContact.firstName}
              userLastName={currentContact.lastName}
              userfavouriteColour={currentContact.favouriteColour}
            />
            <div className="contact-info">
              <Link to={`/profile/${currentContact.id}`}>
                <h2>{`${currentContact.firstName} ${currentContact.lastName}`}</h2>
              </Link>

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
