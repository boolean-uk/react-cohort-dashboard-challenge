import SinglePost from "./SinglePost";

function Posts({ posts ,root,loggedInUserColor,loggedInUserInitials}) {
  // console.log(posts);
  return (
    <ul className="posts">
       {posts.map((post) => 
                <SinglePost key={post.id} post={post} root={root} loggedInUserColor={loggedInUserColor }loggedInUserInitials={loggedInUserInitials}/>
            )}
    </ul>
  );
}
export default Posts;
