import PostListItem from "./components/PostListItem";

export default function PostList({ postList }) {

  
  return (
    <>
      <section>
        <ul>
          {postList.map((post, index) => (
            <PostListItem key={index} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
