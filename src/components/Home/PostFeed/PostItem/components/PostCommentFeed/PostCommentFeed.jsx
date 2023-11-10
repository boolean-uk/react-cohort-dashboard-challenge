import { useEffect, useState } from "react";

import Comment from "./components/Comment/Comment";

import api from "../../../../../../utilities/api";
import PulseLoader from "../../../../../Loader/PulseLoader";
import { numberProp } from "../../../../../../utilities/propTypeDefs";

export default function PostCommentFeed({ postId }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    async function getComments() {
      const fetch = await api.post.comment.get(postId);
      setComments(await fetch);
    }
    getComments();
  }, [postId]);

  if (!comments) {
    return <PulseLoader />;
  }

  return (
    <div className="post-comment-feed flex flex-col gap-4">
      {comments.map((comment) => (
        <Comment key={`comment-${comment.id}`} comment={comment} />
      ))}
    </div>
  );
}

PostCommentFeed.propTypes = {postId: numberProp}