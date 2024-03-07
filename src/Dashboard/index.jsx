//import { useContext } from "react";
//import { PostContext } from "../App";
import PostList from "./components/PostList";
import CreatePostForm from "../CreatePostForm";
import "./index.css";

export default function Dashboard() {
  //const postContext = useContext(PostContext)
  //console.log(postContext.users);

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
