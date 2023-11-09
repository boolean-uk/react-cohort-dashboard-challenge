import { useEffect, useState } from "react";
import PostCommentItem from "./PostCommentItem";

export default function PostComments(props) {
  const [comments, setComments] = useState([]);

  const { post, fetchContact } = props;

  const fetchComments = () => {
    fetch(`https://boolean-api-server.fly.dev/yee0802/post/${post.id}/comment`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  useEffect(fetchComments, []);

  return (
    <div className="post-comments-container">
      <ul className="post-comments">
        {comments.map((comment, idx) => (
          <PostCommentItem key={idx} comment={comment} />
        ))}
      </ul>
    </div>
  );
}
