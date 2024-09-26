import PostListItem from "./PostListItem";

export default function PostList(props) {
  const { posts, setRefresh } = props;

  return (
    <div className="post-list-container">
      <ul className="post-list">
        {posts
          .map((post, idx) => (
            <PostListItem key={idx} post={post} setRefresh={setRefresh} />
          ))
          .reverse()}
      </ul>
    </div>
  );
}
