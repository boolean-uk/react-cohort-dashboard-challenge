import PostsList from "./components/Post/PostsList";
import CreateNewPost from "./components/Post/CreateNewPost";

export default function HomePage() {
  return (
    <>
      <CreateNewPost />
      <PostsList />
    </>
  );
}
