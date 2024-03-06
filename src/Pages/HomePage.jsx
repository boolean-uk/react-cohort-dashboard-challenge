import PostsList from "./components/PostsList";
import CreateNewPost from "./components/CreateNewPost";

export default function HomePage() {
  return (
    <>
      <h1>Cohort Manager</h1>
      <CreateNewPost />
      <PostsList />
    </>
  );
}
