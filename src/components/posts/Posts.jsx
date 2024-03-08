import { useContext } from "react";
import { MyContext } from "../../App";
import PostList from "./PostList";

export default function Posts() {
  const context = useContext(MyContext);
  return <PostList posts={context.posts} />;
}
