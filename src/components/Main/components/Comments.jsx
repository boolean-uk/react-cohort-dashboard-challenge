import { useEffect, useState } from "react";
import AddNewComment from "./AddNewComment";
import PostComment from "./PostComment";

function Comments({ loggedInUserInitials, root, post, loggedInUser }) {
  const [comments, setComments] = useState(null);

  const fetchComment = () => {
    fetch(`${root}/post/${post.id}/comment`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  useEffect(() => {
    fetchComment();
  }, [root]);
  console.log(comments);
  if (!comments) return <p>loading...</p>;
  return (
    <div className="comments">
      <ul className="all-comment">
        {comments.map((comment) => (
          <PostComment
            key={comment.id}
            comment={comment}
            root={root}
          ></PostComment>
        ))}
      </ul>
      <AddNewComment
        loggedInUserInitials={loggedInUserInitials}
        root={root}
        post={post}
        setComments={setComments}
        loggedInUser={loggedInUser}
      ></AddNewComment>
    </div>
  );
}

export default Comments;
