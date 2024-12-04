import { useContext } from 'react'
import { PostsContext } from './Dashboard'
import PostItem from './PostItem'
import NewPost from './NewPost'

function HomePage() {
  const { posts, fetchPosts } = useContext(PostsContext)
  return (
    <div className='posts-container'>

      <div className='create-post'>
        <NewPost fetchPosts={fetchPosts} />
      </div>

      {posts && posts.map((post, index) => <PostItem post={post} key={index} />)}
    </div>
  )
}

export default HomePage