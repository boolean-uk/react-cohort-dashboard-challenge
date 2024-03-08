import React from 'react'
import { Post } from './Post'
import { PersonalPost } from './PersonalPost'
import "./styles/Posts.css"

export function Posts({posts}) {
    

    if ( !posts ) return <h1>Loading!</h1>

    return (
        <>
            <div className='page'>
                <PersonalPost />
                <ul className='post-list'>
                {posts.map((post, key) => 
                    <Post postIdAlt={post.id} key={key}/>
                    )}
                </ul>
            </div>
        </>
    )
}
