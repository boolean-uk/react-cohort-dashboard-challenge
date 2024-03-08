import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext } from '../App'; 
import { CommentContext } from './PostListItem'; 
export default function Comment({ comment }) {
  const { users, activeUser } = useContext(UserContext);
  const { comments, setComments, post } = useContext(CommentContext);
  const user = users.find((user) => user.id === comment.contactId);
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const deleteComment = () => {
    fetch(
      `https://boolean-api-server.fly.dev/SanderSaether/post/${post.id}/comment/${comment.id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setComments(comments.filter((c) => c.id !== comment.id));
    });
  };

  const updateComment = (e) => {
    e.preventDefault();
    const updatedComment = { ...comment, content: editContent };
    fetch(
      `https://boolean-api-server.fly.dev/SanderSaether/post/${post.id}/comment/${comment.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedComment),
      }
    ).then(() => {
      setEdit(false);
      setComments(
        comments.map((c) => (c.id === comment.id ? updatedComment : c))
      );
    });
  };

  return (
    <li className="post-list-item-container" key={comment.id}>
      <Link to={`/profile/${user.id}`}>
        <div
          className="create-post-profile"
          style={{ backgroundColor: user.favouriteColour }}>
          <h2>
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </h2>
        </div>
      </Link>
      <div className="post-list-item-comment-container">
        <div className="post-list-item-comment-item">
          <Link to={`/profile/${user.id}`}>
            <p id="name">
              {user.firstName} {user.lastName}
            </p>
          </Link>
          {!edit ? (
            <p id="content">{comment.content}</p>
          ) : (
            <form onSubmit={updateComment}>
              <input
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <button hidden={true} type="submit" />
            </form>
          )}
        </div>
        {activeUser.id === comment.contactId && !edit && (
          <div>
            <button className="comment-edit-delete" onClick={deleteComment}>
              {"X"}
            </button>
            <button
              className="comment-edit-delete"
              onClick={() => setEdit(true)}>
              {"Edit"}
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contactId: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
