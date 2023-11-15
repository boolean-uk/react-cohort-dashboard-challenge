import SinglePost from "./SinglePost";

function Posts({
  posts,
  root,
  loggedInUserColor,
  loggedInUserInitials,
  loggedInUser,
}) {
  // console.log(posts);
  return (
    <ul className="posts">
      {posts.map((post) => (
        <SinglePost
          key={post.id}
          post={post}
          root={root}
          loggedInUserColor={loggedInUserColor}
          loggedInUserInitials={loggedInUserInitials}
          loggedInUser={loggedInUser}
        />
      ))}
    </ul>
  );
}
export default Posts;
