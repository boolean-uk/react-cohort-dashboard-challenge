import { useContext } from "react";
import { AppContext } from "../App";
import Post from "./Post";
import CreatePost from "./CreatePost";
function Posts() {
  const { posts, setPosts } = useContext(AppContext);
  if (!posts) {
    return(<p>loading content...</p>)
  }
  return (
    <div className="posts">
    <CreatePost setPosts={setPosts} posts={posts}/>
    <ul>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </ul>
    </div>
  );
}

export default Posts;
