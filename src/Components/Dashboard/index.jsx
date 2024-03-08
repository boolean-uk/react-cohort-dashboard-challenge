import CreatePost from "./CreatePost";
import PostList from "./PostList";

function Dashboard() {
  return (
    <main className="main green">
      <CreatePost />
      <PostList />
    </main>
  );
}

export default Dashboard;
