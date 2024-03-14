import React from 'react'
import PostList from './posts/PostList'

function Dashboard({ posts }) {
    return (
        <>
        <div>
            {posts && <PostList posts={posts}/>}
        </div>
        </>
    )
}

export default Dashboard