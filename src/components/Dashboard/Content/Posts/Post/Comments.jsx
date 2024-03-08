import React, { useEffect, useState } from 'react'
import './Comments.css'
import CommentComponent from './Comments/Comment'
import { APIURL } from '../../../../../App'

export default function CommentsComponent({ postId, comments }) {

    useEffect(() => {
        fetch(`${APIURL}/post/${postId}/comment`)
            .then(response => response.json())
            .then(data => comments.set(data))
    }, [postId])



    return (
        <div className='comments'>
            <ul className='list'>
                {comments.get.map((comment, index) => (
                    <CommentComponent key={index} comment={comment} />
                ))}
            </ul>

        </div>
    )
}
