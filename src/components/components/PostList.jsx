import PostListItem from "./components/PostListItem";

export default function PostList({ postList, reloadPostList, setReloadPostList, mockLoggedInUserId, reloadComments, setReloadComments}) {
  const postListNewToOld = postList.toReversed()

  return (
    <>
      <section className="feed-container">
        <ul>
          {postListNewToOld.map((post, index) => (
            <PostListItem 
              key={index} 
              post={post} 
              setReloadPostList={setReloadPostList} 
              reloadPostList={reloadPostList} 
              mockLoggedInUserId={mockLoggedInUserId}
              setReloadComments={setReloadComments}
              reloadComments={reloadComments}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
