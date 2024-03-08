import React, { useContext, useState } from 'react'
import { ConnectionContext, UsersContext } from '../App';
import ProfilePicture from './ProfilePicture';
import "./styles/PersonalPost.css"

export function PersonalPost() {
    
    const { currentUser, setPosts } = useContext(UsersContext);
    const {url} = useContext(ConnectionContext);
    const [personalPost, setPersonalPost] = useState({})

    const changePersonalpost = (event) => {
        const {name, value} = event.target;
        setPersonalPost({...personalPost, [name]: value})
    }

    const submitPost = (event) => {
        event.preventDefault();
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                ...personalPost,
                contactId: currentUser.id,
            }),
        }).then(res => res.json()).then(data => setPosts(posts => [...posts, data]))
        setPersonalPost({})
    }

    if(!currentUser) return <h1>Loading!</h1>

    return (
        <>
        <form className='post-form' onSubmit={submitPost}>
            <div className='post-create'>
            <ProfilePicture firstName={currentUser.firstName} lastName={currentUser.lastName} favouriteColour={currentUser.favouriteColour}/>
            <input type="text" name="title" value={personalPost.title} onChange={changePersonalpost} className='post-bar' placeholder="What's on your mind?"></input>
            <button onClick={submitPost} className='post-btn'>Post</button>
            </div>
            <input type="text" name="content" value={personalPost.content} onChange={changePersonalpost} className='post-bar' placeholder="Please elaborate"></input>
        </form>
        </>
    )
}
