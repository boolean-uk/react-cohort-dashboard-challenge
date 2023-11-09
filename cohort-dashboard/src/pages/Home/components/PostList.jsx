import PostListItem from "./PostListItem";

export default function PostList(props) {
  const { posts } = props;

  return (
    <div className="post-list-container">
      <ul className="post-list">
        {posts.map((post, idx) => (
          <PostListItem key={idx} post={post} />
        ))}
      </ul>
    </div>
  );
}
