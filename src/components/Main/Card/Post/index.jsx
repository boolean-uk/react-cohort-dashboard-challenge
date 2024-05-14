import { createContext, useEffect, useState } from 'react'
import CommentBox from '../CommentBox'
import PostTitle from './PostTitle'
import { useParams } from 'react-router-dom'

export const PostContext = createContext()

export default function Post({ id }) {
    const urlParams = useParams()


    const [author, setAuthor] = useState({})
    const [postData, setPostData] = useState({})

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/angustownsley/post/${id}`)
            .then((response) => response.json())
            .then((json) => setPostData({ ...json }))
    }, [])

    useEffect(() => {
        if (postData.contactId) {
            fetch(
                `https://boolean-api-server.fly.dev/angustownsley/contact/${postData.contactId}`
            )
                .then((response) => response.json())
                .then((json) => setAuthor({ ...json }))
        }
    }, [postData])

    return (
        <article>
            <PostTitle author={author} title={postData.title} />
            <p>{postData.content}</p>
            <CommentBox author={author} title={postData.title} id={id} />
        </article>
    )
}
