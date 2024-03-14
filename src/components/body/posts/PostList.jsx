import { useState, useEffect } from "react"
import PostListItem from "./PostListItem"
import CreatePost from "./CreatePost"

function PostList({ posts }) {
    if ( !posts ) return <h1>Loading ...</h1>

    return ( 
        <div>
            <CreatePost />
            <div className='post-list'>
                {posts.map((post, key) => 
                    <PostListItem postIdAlt={post.id} key={key}/>
                )}
            </div>
        </div>
    )
}

export default PostList