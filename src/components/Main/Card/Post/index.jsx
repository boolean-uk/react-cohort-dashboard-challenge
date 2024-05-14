import { useEffect, useState } from 'react'
import CommentBox from '../CommentBox'
import PostTitle from './PostTitle'

export default function Post({props}) {
    const {title, body, id, authorId} = props
    
    const [author, setAuthor] = useState({})

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/angustownsley/contact/${authorId}`)
        .then(response => response.json())
        .then(json => setAuthor({...json}))
    }, [])
    
    return (
        <article>
            <PostTitle author={author} title={title} />
            <p>
                {body}
            </p>
            <CommentBox author={author} title={title} id={id}/>
        </article>
    )
}
