import { useState } from "react";

import NewPost from "./components/NewPost/NewPost";
import PostFeed from "./components/PostFeed/PostFeed";

import { contactProps } from "@utilities/propTypeDefs";

export default function Home({ user }) {
  const [loadPosts, setLoadPosts] = useState(true)

  return (
    <section className="app-main bg-cohort-background">
      <NewPost user={user} setLoadPosts={setLoadPosts}/>
      <PostFeed loadPosts={loadPosts} setLoadPosts={setLoadPosts}/>
    </section>
  );
}

Home.propTypes = {
  user: contactProps,
};
