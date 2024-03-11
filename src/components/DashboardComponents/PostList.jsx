import { DataContext } from "../../App";
import { useContext, createContext } from "react";
import PostListItem from "./PostListItem";


export default function PostList() {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;


  return (
    <>
      {(posts.toReversed()).map((post, index) => (
          <PostListItem key={index} post={post} />
      ))}
    </>
  );
}

