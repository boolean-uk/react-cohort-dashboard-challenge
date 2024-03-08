import PostList from "./components/PostList";
import CreatePostForm from "../CreatePostForm";
import "./index.css";

export default function Dashboard() {

  return (
    <main className="dashboard_layout">
      <section>
        <CreatePostForm />
      </section>
      <section>
        <PostList />
      </section>
    </main>
  );
}
