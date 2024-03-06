import CreateNewPost from "./components/CreateNewPost";
import PostList from "./components/PostList";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <CreateNewPost />
      <PostList />
    </div>
  );
}
