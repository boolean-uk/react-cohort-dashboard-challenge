import { useContext } from "react";
import PostListItem from "./PostListItem";
import { AppContext } from "../../App.jsx";

function PostList() {
  const { posts } = useContext(AppContext);
  const reversedPosts = [...posts].reverse();
  return (
    <ul>
      {reversedPosts.map((post, index) => (
        <PostListItem key={index} post={post} />
      ))}
    </ul>
  );
}

export default PostList;
