import { useContext } from 'react'
import { PostContext } from '../../pages/DashBoard'
import PostItem from './PostItem'

function PostList() {
    const { posts } = useContext(PostContext)

    // Reverse the order of the posts array
    const reversedPosts = posts.slice().reverse(); // Create a copy of the array to avoid mutating the original

    
  return (
    <div className="postlist">
        {reversedPosts && reversedPosts.length > 0 && reversedPosts.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
    </div>
  )
}

export default PostList
