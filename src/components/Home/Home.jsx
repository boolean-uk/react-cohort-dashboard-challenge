import { useState } from "react";

import NewPost from "./components/NewPost/NewPost";
import PostFeed from "./components/PostFeed/PostFeed";

import { contactProps } from "@utilities/propTypeDefs";

import "./Home.css"

export default function Home({ user }) {
  const [loadPosts, setLoadPosts] = useState(true);

  return (
    <section className="app-home gap-4 bg-cohort-background p-6 flex flex-col">
      <NewPost user={user} setLoadPosts={setLoadPosts} />
      <PostFeed loadPosts={loadPosts} setLoadPosts={setLoadPosts} />
    </section>
  );
}

Home.propTypes = {
  user: contactProps,
};
