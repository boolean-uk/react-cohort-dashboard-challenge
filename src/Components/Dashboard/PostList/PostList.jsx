import { PostContext } from '../Dashboard'
import PostListItem from '../PostListItem/PostListItem'
import { useContext} from 'react'
import "./PostList.css"

function PostList() {
  const { posts } = useContext(PostContext)

  return (
    <div className='post-cards'>
        {posts.map((post, i) => (
            <PostListItem key={i} post={post} />
        ))}
    </div>
  )
}

export default PostList
