import { useContext } from "react";
import { Post } from "../Posts";
import { PostContext } from "../../App";
import CreatePost from "../Posts/components/CreatePost";

export const Feed = () => {
  const { posts } = useContext(PostContext);
  return (
    <>
      <CreatePost></CreatePost>
      <main>
        <ul>
          {posts.map((post, index) => (
            <div key={index}>
              <Post post={post}></Post>
            </div>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Feed;
