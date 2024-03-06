import { DataContext } from "../App";
import { useContext } from "react";
import PostList from "./DashboardComponents/PostList";
import CreatePost from "./DashboardComponents/CreatePost";

export default function Dashboard() {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const setPosts = useContext(DataContext).setPosts;

  return (
    <main className="main green">
      <CreatePost />
      <PostList />
    </main>
  );
}
