import { DataContext } from "../../../App";
import { useContext } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

export default function Post({ post }) {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;

  return (
    <div className="yellow">
      <PostHeader />
      <PostContent />
    </div>
  );
}
