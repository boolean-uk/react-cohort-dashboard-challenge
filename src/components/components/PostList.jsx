import PostListItem from "./components/PostListItem";

export default function PostList({ postList }) {
  const postListNewToOld = postList.toReversed()

  return (
    <>
      <section>
        <ul>
          {postListNewToOld.map((post, index) => (
            <PostListItem key={index} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
