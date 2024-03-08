import { useQuery } from "react-query";
import { getAllComments} from "../../services/PostService";
import PostComment from "./PostComment";
import CommentField from "./CommentField";
import "../../styles/PostCommentList.css";
import { useEffect, useState } from "react";

const maxComments = 3;

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
      setComments(data.slice(0, maxComments));
    }
  }, [data, isSuccess, showAll]);

  return (
    <div className="card-comments">
      {data && data.length > maxComments && (
        <p onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show recent comments ⬆" : "Show all comments ⬇" }
        </p>
      )}
      {comments &&
        comments.map((comment) => (
          <PostComment
            username={"henrikrosenkilde"}
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
