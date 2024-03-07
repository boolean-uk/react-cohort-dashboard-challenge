import PostsList from "./components/PostsList";
import CreateNewPost from "./components/CreateNewPost";

export default function HomePage() {
  return (
    <>
      <CreateNewPost />
      <PostsList />
    </>
  );
}
