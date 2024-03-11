import React from 'react'
import PostBox from './DashboardComponents/PostBox'
import PostFeed from './DashboardComponents/PostFeed'
import PostList from './DashboardComponents/PostList'

function Dashboard() {
  return (
    <>
    <div className="main green">
        <PostBox/>
        <PostList/>
    </div>
    
    </>
  )
}

export default Dashboard