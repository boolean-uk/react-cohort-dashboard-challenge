import { useEffect, useState } from "react";

import api from "../../../utilities/api";

import PostItem from "./PostItem/PostItem";
import PulseLoader from "../../Loader/PulseLoader";

export default function PostFeed() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const fetch = await api.post.get();
      setPosts(await fetch);
    }
    getPosts();
  }, []);

  if (!posts) {
    return <PulseLoader />;
  }

  return (
    <ul className="post-feed p-6 flex flex-col gap-4">
      {posts.map((post) => (
        <PostItem key={`post-item-${post.id}`} post={post} />
      ))}
    </ul>
  );
}
