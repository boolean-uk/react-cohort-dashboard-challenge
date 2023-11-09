import PostHeader from "./components/PostHeader/PostHeader";
import PostBody from "./components/PostBody";
import PostCommentFeed from "./components/PostCommentFeed";

export default function PostItem({ post }) {
  console.log("post", post);
  return (
    <li className="post-item bg-cohort-bg-highlight">
      <PostHeader />
      <PostBody />
      <PostCommentFeed />
    </li>
  );
}
