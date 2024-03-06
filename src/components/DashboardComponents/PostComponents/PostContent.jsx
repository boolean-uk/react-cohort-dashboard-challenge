import { DataContext } from "../../../App";
import { useContext } from "react";

export default function PostContent({post}) {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;

  return (
      <div className="post">{post.content}</div>
  );
}
