import React, { useContext, useState } from 'react'
import { ConnectionContext, UsersContext } from '../App'
import ProfilePicture from './ProfilePicture';


export function PersonalComment({ post, setComments }) {
    
    const { currentUser } = useContext(UsersContext);
    const {url} = useContext(ConnectionContext);
    const [comment, setComment] = useState("")

    const changeComment = (event) => {
        setComment(event.target.value)
    }

    if ( !currentUser ) return <p>Loading ...</p>

    const submitComment = (event) => {
        event.preventDefault();
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
        <>
            <ProfilePicture firstName={currentUser.firstName} lastName={currentUser.lastName} favouriteColour={currentUser.favouriteColour}/>
            <input type='text' value={comment} onChange={changeComment}></input>
            <button onClick={submitComment}>Submit</button>
        </>
    )
}
