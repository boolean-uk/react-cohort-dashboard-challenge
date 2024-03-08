import CreateNewPost from "./CreateNewPost";
import PostList from "./PostList";
import { useParams } from "react-router-dom";
export default function Dashboard() {
  if (useParams().id) {
    return (
      <div className="dashboard">
        <PostList />
      </div>
    );
  }
  return (
    <div className="dashboard">
      <CreateNewPost />
      <PostList />
    </div>
  );
}