import { useContext } from "react";
import { PostContext } from "../App";
import InlinePost from "./InlinePost";
import "./styling/postFeed.css";


function PostFeed() {
  const { posts } = useContext(PostContext);

  return (
    <div className="post-feed">
      {posts.map((post) => (
        <div className="post-container" key={post.id}>
          <InlinePost post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostFeed;