import PostFeedHeader from "./components/PostFeedHeader";
import PostList from "./components/PostList";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [postList, setPostList] = useState(null);
  const [reloadPostList, setReloadPostList] = useState(true);
  const getPosts = () => {
    fetch("https://boolean-api-server.fly.dev/Chloe070196/post")
      .then((r) => r.json())
      .then((data) => setPostList(data))
      .then(setReloadPostList(false));
  };

  useEffect(getPosts, [reloadPostList]);

  return (
    <>
      {!reloadPostList && postList ? (
        <section>
          <PostFeedHeader
            setPostList={setPostList}
            setReloadPostList={setReloadPostList}
            reloadPostList={reloadPostList}
          />
          <PostList
            postList={postList}
            setReloadPostList={setReloadPostList}
            reloadPostList={reloadPostList}
          />
        </section>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
