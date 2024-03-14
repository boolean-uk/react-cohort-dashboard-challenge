import React, { useContext, useState } from 'react'
import { ConnectionContext, UsersContext } from '../../../App'
import ProfilePicture from '../../ProfilePicture'
import SendIcon from "../../../assets/send-icon.svg"

function CreateComment({ post, setComments }) {
    const { currentUser } = useContext(UsersContext)
    const {url} = useContext(ConnectionContext)
    const [comment, setComment] = useState("")

    const changeComment = (event) => {
        setComment(event.target.value)
    }

    if ( !currentUser ) return <p>Loading ...</p>

    const submitComment = (event) => {
        event.preventDefault()
        
        fetch(`${url}/${post.id}/comment`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                contactId: currentUser.id,
                content: comment,
                postId: post.id,
            }),
        }).then(res => res.json()).then(data => setComments(comments => [...comments, data]))
        setComment("")
    }

    return (
        <div className='comment-create'>
            <ProfilePicture 
                firstName={currentUser.firstName} 
                lastName={currentUser.lastName} 
                favouriteColour={currentUser.favouriteColour}/>
            <div className='comment-form'>
                <input type='text' value={comment} onChange={changeComment} className='comment-bar' placeholder='Add a comment...'></input>
                <button onClick={submitComment} className='comment-btn'>
                    <img src={SendIcon} />
                </button>
            </div>
        </div>
    )
}

export default CreateComment