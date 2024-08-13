import { GetNames } from "../../utils/functions";

const CommentAuthor = ({ comment, contacts }) => {
  return (
    <p>
      <span>{GetNames(comment.contactId, contacts)}</span>
    </p>
  );
};

export default CommentAuthor
