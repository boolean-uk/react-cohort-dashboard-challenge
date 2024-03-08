import { useContext, useEffect } from "react";
import Comment from "./Comment";
import { UserContext } from "../../../../App";

function CommentList(props) {
  const { comments } = props;
  const { users } = useContext(UserContext);

  return (
    <>
      {comments &&
        comments.map((comment, index) => {
          const user = users.find((u) => u.id === comment.contactId);
          return <Comment key={index} comment={comment} user={user} />;
        })}
    </>
  );
}

export default CommentList;
