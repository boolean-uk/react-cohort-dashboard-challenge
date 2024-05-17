import { useContext } from "react";
import { UsersContext } from "../../../App";

export default function Comment({comment}) {

    const {users} = useContext(UsersContext)

    const commentor = users.filter((user) => user.id === comment.contactId);


  return (
    <li className="comment" key={comment.id}>
        {commentor &&
        <div className="profile-initials" style={{ backgroundColor: commentor[0].favouriteColour }}>
          <p className="initials">
            {commentor[0].firstName[0]}
            {commentor[0].lastName[0]}
          </p>
      </div>
        }
      <div className="comment-box">
        {commentor && (
          <p id="commentor-name">
            {commentor[0].firstName} {commentor[0].lastName}
          </p>
        )}
        <p>{comment.content}</p>
      </div>
    </li>
  );
}
