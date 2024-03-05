import AddComment from "./AddComment";
import Comments from "./Comments";
import PostHeader from "./PostHeader";
import "../Body.css";
export default function Post() {
  return (
    <>
      <div className="post-box">
        <PostHeader />
        <div className="post-body">This is a post about a thing</div>
        <Comments />
        <AddComment />
      </div>
    </>
  );
}
