import { useContext } from "react";

import "./PostList.css";
import PostItem from "../PostItem/PostItem";
import { FeedContext } from "../PostFeed/PostFeed";
function PostList() {
  const { posts } = useContext(FeedContext);

  //Newest post first, aka higher id first
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <div className="post-list">
      {/* <h1>PostList</h1> */}

      {sortedPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
