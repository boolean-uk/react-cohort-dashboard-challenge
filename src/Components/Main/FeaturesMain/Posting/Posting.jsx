import { createContext, useEffect, useState } from "react"
import Comment from "../Comment/Comment"
import PostName from "./PostName/PostName"
import PropTypes from 'prop-types'

export const PostContext =createContext()

// Defining the Posting component
export default function Posting({ id }) {
    // Using useState hook to manage author state
    const [author, setAuthor] = useState({})
    
    // Using useState hook to manage postData state
    const [postData, setPostData] = useState({})

    // Effect to fetch post data when the id prop changes
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/Shaun-Harris/post/${id}`)
        .then((response) => response.json())
        .then((json) => setPostData({ ...json}))
    }, [id])

    // Effect to fetch author data when the postData state changes
    useEffect(() => {
        // Checking if postData contains contactId
        if (postData.contactId) {
            fetch(
                `https://boolean-api-server.fly.dev/Shaun-Harris/contact/${postData.contactId}`
            )
            .then((response) => response.json())
            .then((json) => setAuthor({ ...json}))
        }
    }, [postData])

    // Rendering the component
    return (
        <article>
            {/* Rendering the PostName component */}
            <PostName author={author} title={postData.title} id={id} />

            {/* Rendering the post content */}
            <p className='post-content'>{postData.content}</p>
            
            {/* Horizontal line */}
            <hr/>
            
            {/* Rendering the Comment component */}
            <Comment author={author} title={postData.title} id={id} />
        </article>
    )
}
Posting.propTypes ={
    id: PropTypes.string.isRequired
}