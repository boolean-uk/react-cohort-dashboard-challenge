import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function PostsListItem(props) {
  const { post } = props;

  const [currentContact, setCurrentContact] = useState(null);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;
  console.log("POST: ", post.contactId);
  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await fetch(URL + `/${post.contactId}`);

        if (!response.ok) {
          console.log(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setCurrentContact(data);
      } catch (er) {
        console.log("OBS!!! Something went wrong retrieving post owner");
      }
    };
    fechData();
  }, [URL]);

  console.log("Current contact: ", currentContact);
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

        <div className="comment-card">
          <p>{post.content}</p>
        </div>
        <div className="post-comment-card">
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
