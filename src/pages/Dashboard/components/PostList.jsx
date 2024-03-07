import { PostContext } from "../../../App";
import { useContext } from "react";
import { PostListItem } from "./PostListItem";
import { useParams } from "react-router-dom";

export default function PostList() {
  const { posts } = useContext(PostContext);
  const reversedPosts = [...posts].reverse();
  const { id } = useParams();
  if (id) {
    const post = posts.find((post) => post.id === parseInt(id));
    return (
      <div className="post-list">
        <ul>
          <li>
            <PostListItem single={true} post={post} />
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="post-list">
      <ul>
        {reversedPosts.map((post) => (
          
          <li key={post.id}>
            <PostListItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
