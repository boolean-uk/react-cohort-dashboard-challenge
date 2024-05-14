import CreatePost from "./CreatePost";
import Post from "./Post";
import Loader from "./Loader";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

export default function PostFeed() {
  const { posts, isLoading, mode } = useContext(DataContext);
  const [postsDescending, setPostsDescending] = useState([]);

  useEffect(() => {
    setPostsDescending(getPostsDescending);
  }, [posts]);

  function getPostsDescending() {
    const descending = [];
    for (let i = posts.length; i >= 0; i--) {
      if (posts[i]) {
        descending.push(posts[i]);
      }
    }
    return descending;
  }

  return (
    <>
      <div className={`post-feed ${mode}`}>
        <CreatePost />

        {isLoading && <Loader />}

        {postsDescending.map((post) => (
          <Post key={post?.id} post={post} />
        ))}
      </div>
    </>
  );
}
