import React from 'react'
import { Post } from './Post'
import { PersonalPost } from './PersonalPost'

export function Posts({posts}) {
    

    if ( !posts ) return <h1>Loading!</h1>

    return (
        <>
            <PersonalPost />
            {posts.map((post, key) => 
                <Post post={post} key={key}/>
                )}
        </>
    )
}
