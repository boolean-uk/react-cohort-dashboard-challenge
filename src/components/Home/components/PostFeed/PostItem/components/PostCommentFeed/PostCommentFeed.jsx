import { useEffect, useState } from "react";

import Comment from "./components/Comment/Comment";

import PulseLoader from "@components/Loader/PulseLoader";

import api from "@utilities/api";
import { boolProps, funcProp, numberProp } from "@utilities/propTypeDefs";

export default function PostCommentFeed({
  loadComments,
  postId,
  setLoadComments,
}) {
  const [comments, setComments] = useState(null);
  const [renderComments, setRenderComments] = useState(null);
  const [commentRenderAmount] = useState(3);
  const [showMoreComments, setShowMoreComments] = useState(false);

  useEffect(() => {
    if (comments) {
      if (showMoreComments) {
        setRenderComments(comments);
      } else {
        setRenderComments(
          comments.slice(comments.length - commentRenderAmount),
        );
      }
    }
  }, [comments, commentRenderAmount, showMoreComments]);

  useEffect(() => {
    async function getComments() {
      const fetch = await api.post.comment.get(postId);
      setComments(await fetch);
      setLoadComments(false);
    }
    loadComments && getComments();
  }, [loadComments, postId, setLoadComments]);

  function handleClick() {
    setShowMoreComments(!showMoreComments);
  }

  if (!renderComments) {
    return <PulseLoader />;
  }

  return (
    <>
      {comments.length > 0 ? <hr /> : null}
      {comments.length > commentRenderAmount && (
        <div onClick={handleClick} className="toggleComments cursor-pointer">
          {showMoreComments ? "Hide" : "Show"} previous comments
        </div>
      )}
      <div className="post-comment-feed flex flex-col gap-4">
        {renderComments.map((comment) => (
          <Comment key={`comment-${comment.id}`} comment={comment} setLoadComments={setLoadComments} />
        ))}
      </div>
    </>
  );
}

PostCommentFeed.propTypes = {
  loadComments: boolProps,
  postId: numberProp,
  setLoadComments: funcProp,
};
