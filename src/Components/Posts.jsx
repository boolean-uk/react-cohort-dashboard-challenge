import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { useParams } from "react-router-dom";

function Posts() {
  const { posts, setPosts, fetchUser } = useContext(AppContext);
  const { id } = useParams();

  if (!posts) {
    return <p>loading content...</p>;
  }

  let filteredPosts = posts;

  if (id) {
    filteredPosts = posts.filter((post) => post.id === id);
    console.log(filteredPosts);
  }

  return (
    <div className="posts">
      <CreatePost setPosts={setPosts} posts={posts} />
      <ul style={{ padding: "0px" }}>
        {filteredPosts.map((post) => (
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
