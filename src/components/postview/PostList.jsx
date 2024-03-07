import { useContext } from 'react'
import { PostContext } from '../../pages/DashBoard'
import PostItem from './PostItem'

function PostList() {
    const { posts } = useContext(PostContext)
    
    
  return (
    <div className="postlist">
        {posts && posts.length > 0 && posts.map((post,index) => (
            <PostItem post={post} key={index} />
        ))}
    </div>
  )
}

export default PostList
