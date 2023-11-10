import PostHeader from "./components/PostHeader/PostHeader";
import PostBody from "./components/PostBody";
import PostCommentFeed from "./components/PostCommentFeed/PostCommentFeed";

import { postProps } from "../../../../utilities/propTypeDefs";

export default function PostItem({ post }) {
  const { content, id } = post;
  return (
    <li className="post-item flex flex-col gap-4 rounded-lg border-2 border-cohort-shade bg-cohort-bg-highlight px-8 py-4">
      <PostHeader post={post} />
      <PostBody content={content} />
      <hr />
      <PostCommentFeed postId={id} />
    </li>
  );
}

PostItem.propTypes = { post: postProps };
