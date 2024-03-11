import React, { useContext, useEffect, useState } from 'react'
import UserIconComponent from '../../../../assets/user-icon'
import { APIURL, loginUserContext } from '../../../../../App'
import './CreateComment.css'

export default function CreateCommentComponent({ postId, comments }) {
    const { loginUser } = useContext(loginUserContext)

    const [getComment, setComment] = useState({
        postId: postId,
        content: "",
        contactId: loginUser.get.id
    })
    const comment = { get: getComment, set: setComment }

    const onChange = (e) => {
        comment.set({
            ...comment.get,
            content: e.target.value
        })
    }

    const postComment = async (e) => {
        
        if (comment.get.content != "") {
            console.log(postId)
            await fetch(`${APIURL}/post/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment.get),
            })

            comment.set({
                ...comment.get,
                content: ""
            })

            fetch(`${APIURL}/post/${postId}/comment`)
                .then(response => response.json())
                .then(data => comments.set(data.reverse()))
        }else{
            console.log("empty string")
        }
    }

    return (
        <div className='createcomment'>
            <UserIconComponent classname='icon' user={loginUser.get} />
            <input className='comment' placeholder='Comment' value={comment.get.content} onChange={onChange} />
            <button className='button' onClick={postComment}>Comment</button>
        </div>
    )
}
