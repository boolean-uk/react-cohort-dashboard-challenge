import PostsList from "./components/PostsList";
import CreateNewPost from "./components/CreateNewPost";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <CreateNewPost />
      <PostsList />
    </>
  );
}
