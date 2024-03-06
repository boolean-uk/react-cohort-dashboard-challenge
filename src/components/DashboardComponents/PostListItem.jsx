import { DataContext } from "../../App";
import { useContext } from "react";
import PostHeader from "./PostComponents/PostHeader";
import PostContent from "./PostComponents/PostContent";

export default function PostListItem({post}) {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;

  return (
    <div className="yellow">
      <PostHeader post={post} />
      <PostContent post={post} />
    </div>
  );
}
