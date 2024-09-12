import CreatePost from "./CreatePost";
import PostList from "./PostList";
function PostBoard() {
  return (
    <div className="page">
      <CreatePost/>
      <PostList />
    </div>
  );
}

export default PostBoard;
