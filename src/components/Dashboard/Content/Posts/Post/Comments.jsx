import React, { useEffect, useState } from 'react'
import './Comments.css'
import CommentComponent from './Comments/Comment'
import { APIURL } from '../../../../../App'

export default function CommentsComponent({ postId, comments, show }) {
    const [getDisplayComments, setDisplayComments] = useState([])
    const displayComments = { get: getDisplayComments, set: setDisplayComments }

    useEffect(() => {
        fetch(`${APIURL}/post/${postId}/comment`)
            .then(response => response.json())
            .then(data => comments.set(data))
    }, [postId])

    useEffect(() => {
        if (show) {
            displayComments.set(comments.get)
        } else {
            displayComments.set(comments.get.slice(0, 3))
        }
    }, [show, comments])

    return (
        <div className='comments'>
            <ul className='list'>
                {displayComments.get.map((comment, index) => (
                    <CommentComponent key={index} comment={comment} />
                ))}
            </ul>

        </div>
    )
}
