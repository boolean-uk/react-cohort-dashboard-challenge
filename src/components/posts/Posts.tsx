import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import { PostPartialProps } from "../common/types";
import Post from "./Post";
import { createContext } from "react";

export const PostsContext = createContext<
  [PostPartialProps[], React.Dispatch<React.SetStateAction<PostPartialProps[]>>]
>([[], () => {}]);

export default function Posts() {
  const [posts, setPosts] = useState<PostPartialProps[]>([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/hermagst/post")
      .then((res) => res.json())
      .then((body: PostPartialProps[]) => setPosts(body));
  }, []);

  return (
    <PostsContext.Provider value={[posts, setPosts]}>
      <div className="flex-none m-4">
        <CreatePost />
        <div className="flex flex-col space-y-4 mt-4 w-full">
          {posts.map((props) => (
            <Post id={props.id} key={props.id} />
          ))}
        </div>
      </div>
    </PostsContext.Provider>
  );
}
