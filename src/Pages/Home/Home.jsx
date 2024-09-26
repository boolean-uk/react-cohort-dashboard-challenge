import React, { useContext } from 'react'
import { PostsContext } from '../../Dashboard'
import PostItem from './Components/PostItem'
import CreatePost from './Components/CreatePost'

function Home() {
  const { posts, fetchPosts } = useContext(PostsContext)
  return (
    <div className='posts-container'>

      <div className='create-post'>
        <CreatePost fetchPosts={fetchPosts} />
      </div>

      {posts && posts.map((post, index) => <PostItem post={post} key={index} />)}
    </div>
  )
}

export default Home