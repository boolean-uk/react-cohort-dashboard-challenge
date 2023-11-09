import { useEffect, useState } from "react";
import PostCommentItem from "./PostCommentItem";
import PostCommentInput from "./PostCommentInput";

export default function PostComments(props) {
  const [comments, setComments] = useState([]);
  const [refreshComments, setRefreshComments] = useState(false);

  const { post } = props;

  const fetchComments = () => {
    fetch(`https://boolean-api-server.fly.dev/yee0802/post/${post.id}/comment`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setRefreshComments(false);
      });
  };

  useEffect(fetchComments, [refreshComments]);

  return (
    <div className="post-comments-container">
      <ul className="post-comments">
        {comments.map((comment, idx) => (
          <PostCommentItem key={idx} comment={comment} />
        ))}
      </ul>
      <PostCommentInput
        postId={post.id}
        setRefreshComments={setRefreshComments}
      />
    </div>
  );
}
