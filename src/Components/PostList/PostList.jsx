import { useContext } from "react";
import { PostsContext } from "../../App";
import "./PostList.css";
import PostItem from "../PostItem/PostItem";
function PostList() {
  const { posts } = useContext(PostsContext);

  return (
    <div className="post-list">
      {/* <h1>PostList</h1> */}

      {posts.map((post, idx) => (
        <PostItem key={idx} post={post} />
      ))}
    </div>
  );
}

export default PostList;
