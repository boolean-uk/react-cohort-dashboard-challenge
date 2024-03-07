import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { Context } from "../App";
import CommentForm from "./CommentForm";

function PostListItem({ post }) {
  const [comments, setComments] = useState([]);
  const { users } = useContext(Context);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maha897/post/${post.id}/comment`)
      .then((response) => response.json())
      .then(setComments);
  }, [post.id]);

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

      <div className="comments">
        {comments.length > 0 && (
          <div className="posted-comments">
            <ul className="comments-ul">
              {comments.map((comment) => (
                <li key={comment.id} className="comment-item">
                  <div className="comment-avatar-container">
                    <Avatar
                      name={`${getUserInfo(comment.contactId).firstName} ${
                        getUserInfo(comment.contactId).lastName
                      }`}
                      round={true}
                      size={50}
                    />
                  </div>
                  <div className="comment-details">
                    <div className="comment-user">
                      <b>{`${getUserInfo(comment.contactId).firstName} ${
                        getUserInfo(comment.contactId).lastName
                      }`}</b>
                    </div>
                    <div className="comment-content">
                      <p>{comment.content}</p>
                    </div>
                  </div>

                  <br />
                </li>
              ))}
            </ul>
          </div>
        )}

        <CommentForm
          post={post}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </li>
  );
}

PostListItem.propTypes = {
  post: PropTypes.object,
};

export default PostListItem;
