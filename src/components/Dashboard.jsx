import React from 'react'
import { Posts } from './Posts'

export function Dashboard({ posts }) {
    

    return (
        <>
        <div className='dashboard'>
            {posts && <Posts posts={posts}/>}
        </div>
        </>
    )
}
