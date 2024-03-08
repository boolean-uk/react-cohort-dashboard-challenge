import { useContext } from "react";
import PostItem from "./PostItem";
import { AppContext } from "../App";

function PostList() {
  const { posts } = useContext(AppContext);
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
