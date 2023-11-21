const Post = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Post;