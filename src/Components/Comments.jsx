import CreateComment from "./CreateComment";
import Comment from "./Comment";
import { useEffect, useContext } from "react";
import { PostContext } from "./Post";
function Comments({ fetchUser, postId }) {
  const { postComments } = useContext(PostContext);
  if (!postComments) {
    return;
  }
  return (
    <div>
      {postComments.map((comment, index) => {
        return <Comment key={index} comment={comment} fetchUser={fetchUser} />;
      })}
      <CreateComment postId={postId} />
    </div>
  );
}

export default Comments;
