import { GetNames } from "../../utils/functions";
import CommentAuthor from "../authorName/commentAuthor";
import UserCmInitials from "../buttons/userCmInitials";

const Comment = ({ c, contacts }) => {
  return (
    <li>
      <UserCmInitials c={c} contacts={contacts} />
      <div>
        <CommentAuthor comment={c} contacts={contacts} />
        <p>{c.content}</p>
      </div>
    </li>
  );
};

export default Comment;
