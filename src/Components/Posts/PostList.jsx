import { Post } from "./Post";
import { postState } from "../../State/posts.state";
import { useAtom } from "jotai";
import { Space } from "@mantine/core";
export function PostList() {
  const [posts] = useAtom(postState);

  return (
    <>
      {posts.map((post) => (
        <>
          <Post key={post.id} post={post} />
          <Space h={10} />
        </>
      ))}
    </>
  );
}
