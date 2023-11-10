import { useEffect, useState } from "react";

import PostItem from "./PostItem/PostItem";

import PulseLoader from "@components/Loader/PulseLoader";

import api from "@utilities/api";
import { arraySortByObjIdDesc } from "@utilities/array";
import { boolProps, funcProp } from "@utilities/propTypeDefs";

export default function PostFeed({ loadPosts, setLoadPosts }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const fetch = await api.post.get();
      arraySortByObjIdDesc(fetch);
      setPosts(fetch);
      setLoadPosts(false);
    }

    loadPosts && getPosts();
  }, [loadPosts]);

  if (!posts) {
    return <PulseLoader />;
  }

  return (
    <ul className="post-feed flex flex-col gap-4 p-6">
      {posts.map((post) => (
        <PostItem key={`post-item-${post.id}`} post={post} />
      ))}
    </ul>
  );
}

PostFeed.propTypes = {
  loadPosts: boolProps,
  setLoadPosts: funcProp,
};
