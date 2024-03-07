import React from 'react'
import CreatePost from './CreatePost'
import PostList from './Posts/PostList'

function Dashboard() {
  return (
    <div className='dashboard'>
        <CreatePost />
        <PostList />
    </div>
  )
}

export default Dashboard