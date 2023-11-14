import PostFeedHeader from "./Dashboard_components/PostFeedHeader";
import PostList from "./Dashboard_components/PostList";
import { useState, useEffect } from "react";
import getData from "../../js_functions/get";

export default function Dashboard({mockLoggedInUserId, setReloadPostList, reloadPostList, reloadComments, setReloadComments, reloadContacts}) {
  const [postList, setPostList] = useState(null);

  useEffect(() => {
    getData("post", setPostList, setReloadPostList )
    setReloadPostList(false)
  }, [reloadPostList]);

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
