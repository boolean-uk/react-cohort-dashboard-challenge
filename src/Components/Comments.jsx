import CreateComment from "./CreateComment";
import Comment from "./Comment";
import { useState, useContext } from "react";
import { PostContext } from "./Post";

function Comments({ fetchUser, postId }) {
  const { postComments } = useContext(PostContext);
  const [showAll, setShowAll] = useState(false);

  if (!postComments) {
    return null;
  }

  const displayedComments = showAll ? postComments : postComments.slice(0, 3);

  return (
    <div>
      {postComments.length > 3 && !showAll && (
        <p onClick={() => setShowAll(true)}>See previous posts</p>
      )}
      {displayedComments.map((comment, index) => (
        <Comment key={index} postId={postId} comment={comment} fetchUser={fetchUser} />
      ))}
      <CreateComment postId={postId} />
    </div>
  );
}

export default Comments;
