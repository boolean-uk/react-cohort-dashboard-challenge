import { useParams } from "react-router-dom";
import PostListItem from "./PostListItem";
import { useContext } from "react";
import { AppContext } from "../../App";

function PostView() {
  const { posts } = useContext(AppContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);

  return (
    <main className="main green">
      {post && (
        <ul>
          <PostListItem post={post} />
        </ul>
      )}
    </main>
  );
}

export default PostView;
