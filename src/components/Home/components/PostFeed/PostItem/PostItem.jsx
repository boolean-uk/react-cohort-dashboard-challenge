import PostHeader from "./components/PostHeader/PostHeader";
import PostBody from "./components/PostBody";
import PostCommentFeed from "./components/PostCommentFeed/PostCommentFeed";

import { postProps } from "@utilities/propTypeDefs";

export default function PostItem({ post }) {
  const { content, id } = post;

  return (
    <li className="post-item app-card flex flex-col gap-4">
      <PostHeader post={post} />
      <PostBody content={content} />
      <hr />
      <PostCommentFeed postId={id} />
    </li>
  );
}

PostItem.propTypes = { post: postProps };
