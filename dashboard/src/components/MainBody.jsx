import PostList from "./PostList";
import CreatePost from "./CreatePost";

function MainBody({ posts, setPosts, fetchAuthor, fetchPosts }) {
  return (
    <main className="main">
      <CreatePost
        setPosts={setPosts}
        fetchPosts={fetchPosts}
        fetchAuthor={fetchAuthor}
      />
      <PostList posts={posts} fetchPosts={fetchPosts} />
    </main>
  );
}
export default MainBody;
