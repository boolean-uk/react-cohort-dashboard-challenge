import { PostContext } from "../../../App";
import { useContext } from "react";
import { PostListItem } from "./PostListItem";

export default function PostList() {
  const { posts } = useContext(PostContext);
  const reversedPosts = [...posts].reverse();
  return (
    <div className="post-list">
      <ul>
        {reversedPosts.map((post) => (
          <li key={post.id}>
            <PostListItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
