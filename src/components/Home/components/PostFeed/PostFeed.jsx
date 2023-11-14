import { useEffect, useState } from "react";

import PostItem from "./PostItem/PostItem";

import PulseLoader from "@components/Loader/PulseLoader";

import api from "@utilities/api";
import { arraySortByObjIdDesc } from "@utilities/array";
import { boolProps, contactProps, funcProp } from "@utilities/propTypeDefs";

export default function PostFeed({ loadPosts, setLoadPosts, user }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const fetch = await api.post.get();
      arraySortByObjIdDesc(fetch);
      setPosts(fetch);
      setLoadPosts(false);
    }

    loadPosts && getPosts();
  }, [loadPosts, setLoadPosts]);

  if (!posts) {
    return <PulseLoader />;
  }

  return (
    <ul className="post-feed flex flex-col gap-4">
      {posts.map((post) => (
        <PostItem key={`post-item-${post.id}`} postProp={post} setLoadPosts={setLoadPosts} user={user}/>
      ))}
    </ul>
  );
}

PostFeed.propTypes = {
  loadPosts: boolProps,
  setLoadPosts: funcProp,
  user: contactProps,
};
