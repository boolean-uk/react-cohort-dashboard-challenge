import { useQuery } from "react-query";
import { getAllComments } from "@services/PostService";
import PostComment from "./PostComment";
import CommentField from "./CommentField";
import { useEffect, useState } from "react";

export default function PostCommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const { status, data } = useQuery(["getComments", postId], () =>
    getAllComments(postId)
  );

  useEffect(() => {
    if (status === "success") {
      setComments(data);
      console.log(comments);
    }
  }, [data, status, comments]);

  return (
    <div className="card-comments">
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
