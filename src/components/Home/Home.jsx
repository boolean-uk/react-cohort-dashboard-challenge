import { useState } from "react";

import NewPost from "./components/NewPost/NewPost";
import PostFeed from "./components/PostFeed/PostFeed";

import { contactProps } from "@utilities/propTypeDefs";

import "./Home.css";

export default function Home({ user }) {
  const [loadPosts, setLoadPosts] = useState(true);

  return (
    <>
      <NewPost user={user} setLoadPosts={setLoadPosts} />
      <PostFeed loadPosts={loadPosts} setLoadPosts={setLoadPosts} user={user} />
    </>
  );
}

Home.propTypes = {
  user: contactProps,
};
