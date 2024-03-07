import PostItem from "./PostItem"


function PostList({posts}) {
  const reversedPosts = [...posts].reverse()
    
  return (
    <div>
        {reversedPosts.map((post) => 
        <PostItem post={post} key={post.id}></PostItem>
        )}
    </div>
  )
}

export default PostList