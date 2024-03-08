import { useContext, useState } from 'react'
import { PostContext } from '../Dashboard'
import { useParams } from 'react-router-dom'
import PostListItem from '../PostListItem/PostListItem'
import "../PostList/PostList.css"

function SinglePost() {
  const { posts } = useContext(PostContext)
  const { id } = useParams()
  const [post, ] = useState(posts.find(p => p.id == id))

  return (
    <div className='post-cards'>
      <PostListItem post={post} />
    </div>
  )
}

export default SinglePost
