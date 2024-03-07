import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { Context } from "../App";

function PostListItem({ post }) {
  const [comments, setComments] = useState([]);
  const { users } = useContext(Context)
  const initCommentInput = {
    contactId: 10,
    postId: post ? post.id : null,
    content: "",
  };
  const [commentInput, setCommentInput] = useState(initCommentInput);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maha897/post/${post.id}/comment`)
      .then((response) => response.json())
      .then(setComments);
  }, [post.id]);

  function getUserInfo(contactId) {
    console.log(users)
    return users.find((user) => Number(user.id) === Number(contactId));
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch(
      `https://boolean-api-server.fly.dev/maha897/post/${post.id}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentInput),
      }
    )
      .then((response) => response.json())
      .then((newComment) => {
        setComments([...comments, newComment]);
        setCommentInput(initCommentInput);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setCommentInput({ ...commentInput, [name]: value });
  }

  return (
    <li className="post-li">
      <div className="post-header">
        {post.contactId && users.length > 0 && (
          <Avatar
            name={`${getUserInfo(post.contactId).firstName} ${
              getUserInfo(post.contactId).lastName
            }`}
            round={true}
          />
        )}
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </div>
      <p>{post.content}</p>

      <div className="comments">
        {comments.length > 0 && (
          <div className="posted-comments">
            <h3>Comments: </h3>
            <ul className="comments-ul">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <Avatar
                    name={`${getUserInfo(comment.contactId).firstName} ${
                      getUserInfo(comment.contactId).lastName
                    }`}
                    round={true}
                  />
                  <b>{`${getUserInfo(comment.contactId).firstName} ${
                    getUserInfo(comment.contactId).lastName
                  }`}</b>
                  <p>{comment.content}</p>
                  <br />
                </li>
              ))}
            </ul>
          </div>
        )}

        <form className="comment-form" onSubmit={handleSubmit}>
          <Avatar
            name={`${getUserInfo(10).firstName} ${
              getUserInfo(10).lastName
            }`}
            round={true}
          />
          <div className="embed-submit-field">
            <input
              name="content"
              placeholder="Add a comment..."
              onChange={handleChange}
              value={commentInput.content}
            />
            <button type="submit">Comment</button>
          </div>
        </form>
      </div>
    </li>
  );
}

PostListItem.propTypes = {
  post: PropTypes.object,
};

export default PostListItem;
