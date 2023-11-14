import Post from "./Post";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((onePost) => (
        <Post key={onePost.id} onePost={onePost} />
      ))}
    </div>
  );
}

export default Posts;
