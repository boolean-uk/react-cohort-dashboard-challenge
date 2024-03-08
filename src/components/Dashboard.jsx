import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import PostList from "./PostList";
import Sidebar from "./Sidebar";

export default function Dashboard(props) {
  const { posts, setPosts, setDataFetched } = props;

  return (
    <div className="container-nav-main">
              <Sidebar/>
              <PostList posts={posts} setPosts={setPosts} setDataFetched={setDataFetched}/>
    </div>
  );
}
