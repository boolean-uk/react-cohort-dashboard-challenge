import PostItem from "./PostItem"


function PostList({posts}) {
  return (
    <div>
    <div>PostList</div>
        {posts.map((post, index) => 
        <PostItem post={post} key={index}></PostItem>
        )}
    </div>
  )
}

export default PostList