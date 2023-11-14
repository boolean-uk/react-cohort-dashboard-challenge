import SinglePost from "./SinglePost";

function Posts({ posts ,root}) {
  // console.log(posts);
  return (
    <ul className="posts">
       {posts.map((post) => 
                <SinglePost key={post.id} post={post} root={root}/>
            )}
    </ul>
  );
}
export default Posts;
