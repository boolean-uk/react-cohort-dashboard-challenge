import PostItem from "./PostItem"


function PostList({posts}) {
  const reversedPosts = [...posts].reverse()
    
  return (
    <div>
        {reversedPosts.map((post, index) => 
        <PostItem post={post} key={index}></PostItem>
        )}
    </div>
  )
}

export default PostList