import NewPost from "./components/NewPost/NewPost";
import PostFeed from "./components/PostFeed/PostFeed";

export default function Home() {
  return (
    <section className="app-main bg-cohort-background">
    <NewPost />
      <PostFeed />
    </section>
  );
}
