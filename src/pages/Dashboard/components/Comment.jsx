import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { useContext } from "react";

export default function Comment({ comment }) {
  const { users } = useContext(UserContext);
  const user = users.find((user) => user.id === comment.contactId);
  return (
    <li className="post-list-item-container" key={comment.id}>
      <Link to={`/profile/${user.id}`}>
        <div
          className="create-post-profile"
          style={{
            backgroundColor: user.favouriteColour,
          }}>
          <h2>
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </h2>
        </div>
      </Link>
      <div className="post-list-item-comment-item">
        <p id="name">
          {user.firstName} {user.lastName}
        </p>
        <p id="content">{comment.content}</p>
      </div>
    </li>
  );
}
