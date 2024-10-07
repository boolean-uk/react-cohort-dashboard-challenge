import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import PostitemComponent from '../feed/post/postitem.component'

const PostviewComponent = () => {   
    const { id } = useParams()
    const location = useLocation()

    const { post } = location.state

    return (
        <>
            <PostitemComponent post={post}/>
        </>
    )
}

export default PostviewComponent
