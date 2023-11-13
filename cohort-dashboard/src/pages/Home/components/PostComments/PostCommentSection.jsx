import { useEffect, useState } from "react";
import PostCommentItem from "./PostCommentItem";
import CreateComment from "./CreateComment/CreateComment";

export default function PostComments(props) {
  const [comments, setComments] = useState(null);
  const [hiddenComments, setHiddenComments] = useState(-3);
  const [commentBtn, setCommentBtn] = useState("Show previous comments");
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

  const commentsFilter = () => {
    hiddenComments < comments.length - 3 && hiddenComments !== -3
      ? (setHiddenComments(comments.length - 3),
        setRefreshComments(true),
        setCommentBtn("Show previous comments"))
      : (setHiddenComments(0),
        setRefreshComments(true),
        setCommentBtn("Hide comments"));
  };

  if (comments) {
    return (
      <div className="post-comments-container">
        {comments.length > 3 ? (
          <button
            className="comment-filter-btn"
            onClick={() => commentsFilter()}
          >
            {commentBtn}
          </button>
        ) : (
          ""
        )}
        <ul className="post-comments">
          {comments
            .slice(hiddenComments, comments.length)
            .map((comment, idx) => (
              <PostCommentItem key={idx} comment={comment} />
            ))}
        </ul>
        <CreateComment
          postId={post.id}
          setRefreshComments={setRefreshComments}
        />
      </div>
    );
  }
}
