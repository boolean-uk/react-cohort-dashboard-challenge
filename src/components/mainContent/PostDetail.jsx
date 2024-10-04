import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CohortAppContext } from "../../context";
import PostItem from "./PostsList/PostItem";

const PostDetail = () => {
  const { postId } = useParams();
  const { posts } = useContext(CohortAppContext);
  const post = posts.find((p) => p.id === parseInt(postId, 10));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div style={{ margin: "20px" }}>
      <PostItem post={post} />
    </div>
  );
};

export default PostDetail;
