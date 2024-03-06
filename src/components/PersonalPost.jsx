import React, { useContext, useState } from 'react'
import { ConnectionContext, UsersContext } from '../App';
import ProfilePicture from './ProfilePicture';

export function PersonalPost() {
    
    const { currentUser, setPosts } = useContext(UsersContext);
    const {url} = useContext(ConnectionContext);
    const [personalPost, setPersonalPost] = useState("")

    const changePersonalpost = (event) => {
        setPersonalPost(event.target.value)
    }

    const submitPost = (event) => {
        event.preventDefault();
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                contactId: currentUser.id,
                title: "Problem for later",
                content: personalPost,
            }),
        }).then(res => res.json()).then(data => setPosts(posts => [...posts, data]))
        setPersonalPost("")
    }

    if(!currentUser) return <h1>Loading!</h1>

    return (
        <>
            <ProfilePicture firstName={currentUser.firstName} lastName={currentUser.lastName} favouriteColour={currentUser.favouriteColour}/>
            <input type='text' value={personalPost} onChange={changePersonalpost}></input>
            <button onClick={submitPost}>Post</button>
        </>
    )
}
