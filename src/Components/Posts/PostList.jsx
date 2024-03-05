import { useAtom } from "jotai";
import { loadablePostState } from "../../State/posts.state";
import { Loader } from "@mantine/core";
import { Post } from "./Post";
export function PostList() {
  const [loadablePosts] = useAtom(loadablePostState);

  return (
    <div>
      {loadablePosts.state === "hasData" ? (
        <ul>
          {loadablePosts.data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
}
