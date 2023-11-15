import PostListPageItem from "./PostListPageItem";

export default function PostListPage({ posts, API_BASE_URL }) {
  return (
    <div className="post__container">
      <ul className="post__list">
        {posts
          .map((post, index) => (
            <PostListPageItem
              key={index}
              post={post}
              API_BASE_URL={API_BASE_URL}
            />
          ))
          .reverse()}
      </ul>
    </div>
  );
}
