import PostHeader from "./components/PostHeader/PostHeader";
import PostBody from "./components/PostBody";
import PostCommentFeed from "./components/PostCommentFeed/PostCommentFeed";
import NewComment from "./components/NewComment/NewComment";

import { contactProps, postProps } from "@utilities/propTypeDefs";
import { useState } from "react";

export default function PostItem({ post, user }) {
  const [loadComments, setLoadComments] = useState(true)
  const { content, id } = post;

  return (
    <li className="post-item app-card flex flex-col gap-4">
      <PostHeader post={post} />
      <PostBody content={content} />
      <PostCommentFeed loadComments={loadComments} postId={id} setLoadComments={setLoadComments} />
      <NewComment user={user} postId={id} setLoadComments={setLoadComments} />
    </li>
  );
}

PostItem.propTypes = { post: postProps, user: contactProps };
