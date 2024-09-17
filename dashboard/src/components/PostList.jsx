import PostListItem from "./PostListItem.jsx";
function PostList({ posts, fetchPosts }) {
  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <PostListItem post={post} key={post.id} fetchPosts={fetchPosts} />
        ))
      ) : (
        <li>No posts available</li>
      )}
    </>
  );
}

export default PostList;
