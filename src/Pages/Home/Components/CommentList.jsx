import React, { useEffect, useState } from 'react'
import CreateComment from './CreateComment'
import CommentItem from './CommentItem'

function CommentList({postId}) {
    const URL = `https://boolean-api-server.fly.dev/thegrevling/post/${postId}/comment`
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(setComments)
    }, [])

    return (
        <div>
            {comments && comments.map((comment, index) => <CommentItem comment={comment} key={index} />)}
            <CreateComment/>
        </div>
    )
}

export default CommentList