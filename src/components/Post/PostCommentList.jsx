import { useQuery } from "react-query";
import { getAllComments } from "@services/PostService";
import PostComment from "./PostComment";
import CommentField from "./CommentField";
import "@styles/PostCommentList.css";
import { useEffect, useState } from "react";

export default function PostCommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { isSuccess, data } = useQuery(["getComments", postId], () =>
    getAllComments(postId)
  );

  useEffect(() => {
    if (!isSuccess) return;
    if (showAll) {
      setComments(data);
    } else {
      setComments(data.slice(0, 3));
    }
  }, [data, isSuccess, showAll]);

  return (
    <div className="card-comments">
      <p onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show recent comments" : "Show all comments"}
      </p>
      {comments &&
        comments.length > 3 &&
        comments.length !== comments.length && (
          <a onClick={() => setComments(comments)}>See previous comments</a>
        )}
      {comments &&
        comments.map((comment) => (
          <PostComment
            username={"Test User"}
            content={comment.content}
            contactId={comment.contactId}
            key={comment.id}
          />
        ))}
      <CommentField
        onClick={(comment) => setComments([...comments, comment])}
        postId={postId}
      />
    </div>
  );
}
