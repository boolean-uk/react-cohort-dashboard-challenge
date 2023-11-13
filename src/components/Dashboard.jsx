import PostFeedHeader from "./components/PostFeedHeader";
import PostList from "./components/PostList";
import { useState, useEffect } from "react";

export default function Dashboard({mockLoggedInUserId, setReloadPostList, reloadPostList, reloadComments, setReloadComments, reloadContacts}) {
  const [postList, setPostList] = useState(null);
  // const [reloadPostList, setReloadPostList] = useState(true);
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
        <main>
          <PostFeedHeader
            setPostList={setPostList}
            setReloadPostList={setReloadPostList}
            reloadPostList={reloadPostList}
            mockLoggedInUserId={mockLoggedInUserId}
            reloadContacts={reloadContacts}
          />
          <PostList
            postList={postList}
            setReloadPostList={setReloadPostList}
            reloadPostList={reloadPostList}
            mockLoggedInUserId={mockLoggedInUserId}
            setReloadComments={setReloadComments}
            reloadComments={reloadComments}
            reloadContacts={reloadContacts}
          />
        </main>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
