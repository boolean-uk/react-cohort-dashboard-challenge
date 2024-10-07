import React from 'react'
import PostbodyComponent from './postbody.component'

const PostitemComponent = (props) => {

    const { post } = props

    return (
        <>
            <div className="postitem-wrapper">

                <PostbodyComponent post={post}/>
                
            </div>
        </>
    )
}

export default PostitemComponent
