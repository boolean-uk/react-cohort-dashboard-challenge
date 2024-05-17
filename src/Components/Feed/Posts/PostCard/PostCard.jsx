/* eslint-disable react/prop-types */

import { useContext, useState} from "react";
import { UsersContext } from "../../../../App";
import { Link } from "react-router-dom";

import Comment from "../../CommentSection/Comments";
import CommentForm from "../../CommentSection/CommentForm";
import Comments from "../../CommentSection/Comments";

function PostCard({ post }) {
  const { users, loggedInUser } = useContext(UsersContext);
  const [comment, setComment] = useState([]);

  const user = users.find((user) => {
    if (user.id === post.contactId) return user;
  });

  return (
    <>
      {user && (
        <li className="post-container">
          <div className="post-header">
            {user && (
              <div
                className="profile-initials"
                style={{ backgroundColor: user.favouriteColour }}
              >
                <p className="initials">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </p>
              </div>
            )}
            <div className="post-information">
              <p id="profile-name">
                {user.firstName} {user.lastName}
              </p>
              <Link to={`/post/${post.id}`}>
                <p id="post-title">{post.title}</p>
              </Link>
            </div>
          </div>
          <div className="post-body">
            <p>{post.content}</p>
          </div>
          <div className="comment-section">
            <Comments post={post} comment={comment} setComment={setComment}/>
            <CommentForm loggedInUser={loggedInUser} post={post} comment={comment} setComment={setComment}/>
          </div>
        </li>
      )}
    </>
  );
}
export default PostCard;
