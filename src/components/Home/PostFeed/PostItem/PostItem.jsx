import PostHeader from "./components/PostHeader/PostHeader";
import PostBody from "./components/PostBody";
import PostCommentFeed from "./components/PostCommentFeed/PostCommentFeed";

export default function PostItem({ post }) {
  const { content, id } = post;
  return (
    <li className="post-item bg-cohort-bg-highlight border-cohort-shade flex flex-col gap-4 rounded-lg border-2 px-8 py-4">
      <PostHeader post={post} />
      <PostBody content={content} />
      <hr />
      <PostCommentFeed postId={id}/>
    </li>
  );
}
