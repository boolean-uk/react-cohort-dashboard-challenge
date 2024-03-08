import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import PropTypes from "prop-types";

function Comment({ comment }) {
  const { users } = useContext(AppContext);
  const user = users.find((user) => user.id === comment.contactId);

  return (
    <li className="comment">
      {user && (
        <p className="initials" style={{ background: user.favouriteColour }}>
          {user.firstName[0] + user.lastName[0]}
        </p>
      )}
      <div className="comment-text">
        <p className="comment-author">{user.firstName + " " + user.lastName}</p>
        <p>{comment.content}</p>
      </div>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
