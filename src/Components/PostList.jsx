import { useContext } from "react";
import { AppContext } from "../App";
import PostListItem from "./PostListItem";
import "./Styling/PostList.css";

function PostList() {
  const { posts } = useContext(AppContext);
  console.log('posts:',posts);

  return (
    <div className="post-list">
      {posts && posts.length > 0 ? (
        posts.map(post => <PostListItem key={post.id} post={post} />)
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export default PostList;