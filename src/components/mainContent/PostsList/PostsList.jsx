import { useContext } from "react";
import { CohortAppContext } from "../../../context";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useContext(CohortAppContext);

  const sortedPosts = posts.slice().sort((a, b) => b.id - a.id);

  return (
    <div className="post-list">
      {sortedPosts.map((post) => (
        <PostItem key={post.id} showAllComments={false} post={post} />
      ))}
    </div>
  );
};

export default PostList;
