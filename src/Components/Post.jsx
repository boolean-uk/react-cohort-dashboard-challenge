import Comments from "./Comments";

function Post({ post }) {
  return (
    <div className="post">
      <li>
        <h4>{post.user}</h4>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <Comments postComments={post.comments} postId={post.id} />
      </li>
    </div>
  );
}

export default Post;
