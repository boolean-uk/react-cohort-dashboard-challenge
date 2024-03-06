import { createContext, useContext, useEffect } from "react";
import CreatePost from "../CreatePost/CreatePost";
import PostList from "../PostList/PostList";
import "./PostFeed.css";
import { PostsContext } from "../../App";
export const FeedContext = createContext();
function PostFeed() {
  const { setPosts } = useContext(PostsContext);

  function updatePosts() {
    fetch("https://boolean-api-server.fly.dev/martenere/post")
      .then((res) => res.json())
      .then((data) => {
        // data.reverse(); //Get newest post first
        // console.log("update post", data);

        setPosts([...data]);
      });
  }
  useEffect(() => updatePosts(), []);
  return (
    <div className="feed-background">
      <FeedContext.Provider value={{ updatePosts: updatePosts }}>
        <CreatePost></CreatePost>
        <PostList></PostList>
      </FeedContext.Provider>
    </div>
  );
}

export default PostFeed;
