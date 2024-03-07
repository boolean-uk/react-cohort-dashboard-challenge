import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import Post from "./Post";
import CreatePost from "./CreatePost";

function Posts() {
  const { posts, setPosts, fetchUser } = useContext(AppContext);
  if (!posts) {
    return <p>loading content...</p>;
  }

  return (
    <div className="posts">
      <CreatePost setPosts={setPosts} posts={posts} />
      <ul style={{ padding: "0px" }}>
        {posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            post={post}
            fetchUser={fetchUser}
          />
        ))}
      </ul>
    </div>
  );
}

export default Posts;
