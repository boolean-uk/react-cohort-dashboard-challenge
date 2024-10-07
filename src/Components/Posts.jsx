import { useContext } from "react";
import { AppContext } from "../App";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";

function Posts() {
  const { posts } = useContext(AppContext);

  return (
    <div className="posts">
      <h2>Posts</h2>
      <NewPostForm />
      <PostList posts={posts} />
    </div>
  );
}

export default Posts;