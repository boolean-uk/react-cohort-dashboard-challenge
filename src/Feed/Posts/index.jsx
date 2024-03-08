import { useContext } from "react";
import { PostContext, UserContext } from "../../App";
import Post from "./Post";

function Posts() {
  const { users } = useContext(UserContext);
  const { posts } = useContext(PostContext);
  return (
    <>
      {posts.map((post, index) => {
        const user = users.find((u) => u.id === post.contactId);
        return <Post key={index} post={post} user={user || null} />;
      })}
    </>
  );
}

export default Posts;
