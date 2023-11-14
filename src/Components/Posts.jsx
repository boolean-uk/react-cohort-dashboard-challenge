import Post from "./Post";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <Post key={p.id} onePost={p} />
      ))}
    </div>
  );
}

export default Posts;
