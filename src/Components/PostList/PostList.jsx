import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../App";
import "./PostList.css";
import PostItem from "../PostItem/PostItem";
function PostList() {
  const { posts } = useContext(PostsContext);

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
