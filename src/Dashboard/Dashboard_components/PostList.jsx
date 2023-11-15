import PostListItem from "../../Post/PostListItem"

export default function PostList({ postList, reloadPostList, setReloadPostList, mockLoggedInUserId, reloadComments, setReloadComments}) {

  return (
    <>
      <section className="feed-container">
        <ul>
          {postList.toReversed().map((post, index) => (
            <PostListItem 
              key={post.id} 
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
