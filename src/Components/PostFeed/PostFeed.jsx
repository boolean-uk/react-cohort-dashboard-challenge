import { useContext, useEffect } from "react";
import CreatePost from "../CreatePost/CreatePost";
import PostList from "../PostList/PostList";
import "./PostFeed.css";
import { PostsContext } from "../../App";
function PostFeed() {
  const { setPosts } = useContext(PostsContext);

  function getPosts() {
    fetch("https://boolean-api-server.fly.dev/martenere/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }
  useEffect(() => getPosts(), []);
  return (
    <div className="center">
      <CreatePost></CreatePost>
      <PostList></PostList>
    </div>
  );
}

export default PostFeed;
