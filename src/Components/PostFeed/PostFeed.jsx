import { createContext, useEffect, useState } from "react";
import CreatePost from "../CreatePost/CreatePost";
import PostList from "../PostList/PostList";
import "./PostFeed.css";
import * as API from "../../API/API";

export const FeedContext = createContext();

function PostFeed() {
  const [posts, setPosts] = useState([]);

  const updatePosts = () => {
    API.getAllPosts()
      .then((res) => res.json())
      .then((data) => {
        setPosts([...data]);
      });
  };

  useEffect(() => updatePosts(), []);
  return (
    <div className="feed-background">
      <FeedContext.Provider
        value={{
          posts: posts,
          updatePosts: updatePosts,
          deletePostAction: updatePosts,
        }}
      >
        <CreatePost></CreatePost>
        <PostList></PostList>
      </FeedContext.Provider>
    </div>
  );
}

export default PostFeed;
