import { useState, useEffect, createContext, useContext } from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { appContext } from "../App";

export default function Dashboard() {
  const {loggedInUser, allPosts, sortedPosts} = useContext(appContext)

  return (
    <>
      <section className="posts-section">
        <CreatePost />
        <PostList />
      </section>
    </>
  );
}
