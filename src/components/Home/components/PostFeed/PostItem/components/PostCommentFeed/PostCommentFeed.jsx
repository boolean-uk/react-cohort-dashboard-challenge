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

  useEffect(() => {
    async function getComments() {
      const fetch = await api.post.comment.get(postId);
      setComments(await fetch);
      setLoadComments(false);
    }
    loadComments && getComments();
  }, [loadComments, postId, setLoadComments]);

  if (!comments) {
    return <PulseLoader />;
  }

  return (
    <>
      {comments.length > 0 ? <hr /> : null}
      <div className="post-comment-feed flex flex-col gap-4">
        {comments.map((comment) => (
          <Comment key={`comment-${comment.id}`} comment={comment} />
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
