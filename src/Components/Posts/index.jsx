import Post from "../Post";
import PostForm from "../PostForm";

export default function Posts(props) {
  const { posts, getPosts, getComments, post, comments } = props;

  // const limitedPosts = posts.slice(0, 3)

  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  return (
    <div className="main">
      <PostForm getPosts={getPosts} post={post} />
      <div className="posts-container">
        {sortedPosts.map((post, index) => (
          <ul key={index}>
            <Post post={post} getComments={getComments} comments={comments} />
          </ul>
        ))}
      </div>
    </div>
  );
}
