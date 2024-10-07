
import React, { createContext, useContext, useEffect, useState } from 'react'
import PostitemComponent from './postitem.component'
import { ApiContext } from '../../../contexts/apiprovider'
import { HashLoader } from 'react-spinners'
import { PostContext } from '../feed.component'


const PostlistComponent = () => {


    const { postlist, setRefresh } = useContext(PostContext)
    return (
        <>
        <div className="postlist-wrapper">
            
            
            {postlist  ? (
                <>
                {postlist.length === 0 ? (
                    <>
                        <div className="postlist-empty">
                            <p>No posts found</p>
                        </div>
                    </>
                ) : (
                    <>
                        {postlist.map((post) => (
                            <PostitemComponent post={post}/>
                        ))}
                    </>
                )}
                
                </>
            ) : (
                <>
                    <div className="postlist-empty">
                        <HashLoader/>
                        <p>Searching for posts</p>
                    </div>
                </>
            )}              

        </div>
        </>
    )
}

export default PostlistComponent
