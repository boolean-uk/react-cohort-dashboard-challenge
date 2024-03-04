import { Container, Space } from "@mantine/core";
import { AddPost } from "../Components/Posts/AddPost";
import { PostList } from "../Components/Posts/PostList";

export function HomePage() {
  return (
    <>
      <AddPost />
      <PostList />
    </>
  );
}
