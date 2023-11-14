

const Post = ({ posts }) => {
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
