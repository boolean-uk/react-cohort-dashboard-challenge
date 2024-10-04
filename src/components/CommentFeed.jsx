import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import PropTypes from "prop-types";
import ProfileImage from "./ProfileImage";
import "./styling/commentFeed.css";

function CommentFeed({ postId }) {
  CommentFeed.propTypes = {
    postId: PropTypes.number.isRequired,
  };

  const [comments, setComments] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);
  const { currentUser, findUserName, findUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://boolean-uk-api-server.fly.dev/badde00/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: parseInt(postId),
          content: event.target.comment.value,
          contactId: currentUser.id,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          setComments((prevComments) => [...prevComments, data].sort((a, b) => b.id - a.id));
          event.target.reset();
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/badde00/post/${postId}/comment`
    )
      .then((res) => res.json())
      .then((data) => setComments(data.sort((a, b) => b.id - a.id)));
  }, [postId]);

  if (!comments) return <h3>No comments...</h3>;

  const commentsToDisplay = showAllComments ? comments : comments.slice(0, 3);

  return (
    <div className="comment-container">
      <h4>Comments</h4>
      <ul>
        {commentsToDisplay.map((comment) => (
          <li key={comment.id}>
            <div className="comment-profile-image">
              {findUser(comment.contactId) && (
                <ProfileImage user={findUser(comment.contactId)} />
              )}
            </div>
            <div className="comment-text">
              <h5>{findUserName(comment.contactId)}</h5>
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>

      {comments.length > 3 && !showAllComments && (
        <button
          className="show-comments-btn"
          onClick={() => setShowAllComments(true)}
        >
          See previous comments
        </button>
      )}

      <div className="comment-form">
        <ProfileImage user={currentUser} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment" />
          <input
            type="text"
            placeholder="Add a comment..."
            id="comment"
            name="comment"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CommentFeed;
