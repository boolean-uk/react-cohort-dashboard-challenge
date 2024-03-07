import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";

function PostListItem({ post }) {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/maha897/contact")
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  function getUserInfo(contactId) {
    return users.find((user) => user.id === contactId);
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
        <h3>{post.title}</h3>
      </div>
      <p>{post.content}</p>

      <div className="comments">
        {comments.length > 0 && (
          <div className="posted-comments">
            <h3>Comments: </h3>
            <ul className="comments-ul">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <div className="comment-avatar">
                    <Avatar
                      name={`${getUserInfo(comment.contactId).firstName} ${
                        getUserInfo(comment.contactId).lastName
                      }`}
                      round={true}
                    />
                  </div>
                  <h3>
                    {`${getUserInfo(comment.contactId).firstName} ${
                      getUserInfo(comment.contactId).lastName
                    }`}
                    :
                  </h3>
                  {comment.content}
                  <br /> <br />
                </li>
              ))}
            </ul>
          </div>
        )}

        <form className="comment-form" onSubmit={handleSubmit}>
          {/* TODO user info */}
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
