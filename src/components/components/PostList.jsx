import PostListItem from "./components/PostListItem";

export default function PostList({ postList, reloadPostList, setReloadPostList}) {
  const postListNewToOld = postList.toReversed()

  return (
    <>
      <section>
        <ul>
          {postListNewToOld.map((post, index) => (
            <PostListItem 
              key={index} 
              post={post} 
              setReloadPostList={setReloadPostList} 
              reloadPostList={reloadPostList} 
            />
          ))}
        </ul>
      </section>
    </>
  );
}
