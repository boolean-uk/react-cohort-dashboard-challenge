import { Link } from 'react-router-dom'
import ContactCircle from '../../ContactCircle'
import CommentList from './CommentList'
import CreateComment from './CreateComment'
import { useState, useEffect } from 'react'

export default function PostItem({ post, contact, showAllFromStart }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/post/${post.id}/comment`)
            .then((response) => response.json())
            .then((data) => setComments(data))
            .catch((error) => console.error(error))
    }, [post.id])

    return (
        <div className='post-item'>
        <ContactCircle contact={contact} showName={true} />
        <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
        </Link>
        <p>{post.content}</p>
        <CreateComment post={ post } comments={comments} setComments={setComments} />
        <CommentList comments={comments} showAllFromStart={showAllFromStart} />
        </div>
    )
}
