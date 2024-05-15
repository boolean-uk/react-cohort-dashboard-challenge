import { createContext, useEffect, useState } from 'react'
import CommentBox from '../CommentBox'
import PostTitle from './PostTitle'

export const PostContext = createContext()

export default function Post({ id }) {


    const [author, setAuthor] = useState({})
    const [postData, setPostData] = useState({})

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/angustownsley/post/${id}`)
            .then((response) => response.json())
            .then((json) => setPostData({ ...json }))
    }, [])

    useEffect(() => {
        if (postData.contactId) {
            fetch(
                `https://boolean-uk-api-server.fly.dev/angustownsley/contact/${postData.contactId}`
            )
                .then((response) => response.json())
                .then((json) => setAuthor({ ...json }))
        }
    }, [postData])

    return (
        <article>
            <PostTitle author={author} title={postData.title} id={id}/>
            <p className='post-body'>{postData.content}</p>
            <hr/>
            <CommentBox author={author} title={postData.title} id={id} />
        </article>
    )
}
